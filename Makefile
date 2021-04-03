PROJECT = "InkStats"
MANAGER= "yarn" # Yarn or npm


all: install test server

debug: ;@echo "Debuging ${PROJECT}....."; \
	${MANAGER} start serve --debug

test: ;@echo "Testing ${PROJECT}....."; \
	${MANAGER} test 

server : ;@echo "Starting ${PROJECT}....."; \
	node ./dist/cli.js serve

install: ;@echo "Installing ${PROJECT}....."; \
	${MANAGER} install

update: ;@echo "Updating ${PROJECT}....."; \
	git pull --rebase; \
	${MANAGER} install

clean : ;
	rm -rf node_modules


.PHONY: test server install clean update