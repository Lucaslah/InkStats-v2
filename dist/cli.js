"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const app_1 = require("./app");
const chalk_1 = require("./functions/chalk");
const command_line_usage_1 = require("./functions/command_line_usage");
const console_stats_1 = require("./functions/console-stats");
const console_log_1 = require("./functions/console_log");
const clientLog = new console_log_1.ConsoleLog({ number: 1 });
const commandLineUsage = require('command-line-usage');
const logger = require('morgan');
const InkStatsName = config_1.appName;
const CLI_name = InkStatsName.toLowerCase();
// Yargs
const yargs_1 = require("yargs");
const { hideBin } = require('yargs/helpers');
const appport = process.env.PORT || config_1.port || 8080;
const usageargs = process.argv.slice(2);
if (!usageargs[0])
    console.log(commandLineUsage(command_line_usage_1.default));
yargs_1.default(hideBin(process.argv))
    .scriptName(CLI_name)
    .command('serve [port]', 'starts the server', (yargs) => {
    yargs
        .positional('port', {
        describe: 'port to bind on',
        alias: 'p',
        default: appport
    });
}, (argv) => {
    if (argv.no_color) {
        // @ts-ignore
        app_1.default.listen(argv.port, () => {
            console.log(`${InkStatsName} is Running at: http://localhost:${argv.port}`);
        });
    }
    else {
        const CLI_color = process.env.run_with_color || config_1.run_with_color;
        if (CLI_color) {
            // @ts-ignore
            app_1.default.listen(argv.port, () => {
                chalk_1.default(argv);
            });
        }
        else {
            // @ts-ignore
            app_1.default.listen(argv.port, () => {
                console.log(`${InkStatsName} is Running at: http://localhost:${argv.port}`);
            });
        }
    }
    if (argv.debug)
        console.info(`Running ${InkStatsName} in Debeg Mode`) + app_1.default.use(logger('dev'));
})
    .option('debug', {
    alias: 'd',
    type: 'boolean',
    description: 'Run in debug mode'
}).option('no_color', {
    alias: 'n',
    type: 'boolean',
    description: 'Removes Color from the CLI'
})
    .command('stats [stats]', 'shows you computer stats', (yargs) => {
    yargs
        .positional('stats', {
        describe: 'sets the stat you want to see',
        alias: 's',
        default: 'all'
    });
}, (argv) => {
    if (argv.stats === 'all') {
        console_stats_1.default();
    }
    else if (argv.stats === 'totalram') {
        clientLog.stats('totalram');
    }
    else if (argv.stats === 'platform') {
        clientLog.stats('platform');
    }
    else if (argv.stats === 'CPU_model') {
        clientLog.stats('CPU_model');
    }
    else if (argv.stats === 'CPU_speed') {
        clientLog.stats('CPU_speed');
    }
    else if (argv.stats === 'CPU_cores') {
        clientLog.stats('CPU_cores');
    }
    else if (argv.stats === 'sysUptime') {
        clientLog.stats('sysUptime');
    }
    else if (argv.stats === 'hostname') {
        clientLog.stats('hostname');
    }
    else {
        clientLog.args('Invalid Command');
    }
})
    .argv;
