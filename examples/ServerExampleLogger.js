const { InkStats, Log } = require('../dist')

const log = new Log()

const server = new InkStats({
    name: 'Log Example',
    port: 4444,
    message: log.blue('Started on port: {port}')
});

server.start()