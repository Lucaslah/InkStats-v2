PROJECT = "InkStats"


all: install test server

debug: ;@echo "Debuging ${PROJECT}....."; \
	yarn start serve --debug

test: ;@echo "Testing ${PROJECT}....."; \
	yarn test 

server : ;@echo "Starting ${PROJECT}....."; \
	node ./dist/cli.js serve

install: ;@echo "Installing ${PROJECT}....."; \
	yarn install

update: ;@echo "Updating ${PROJECT}....."; \
	git pull --rebase; \
	yarn install

clean : ;
	rm -rf node_modules


.PHONY: test server install clean update