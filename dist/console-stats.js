"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatsModule = require("./StatsModule");
const ms_1 = require("./ms");
const chalk = require("chalk");
function console_stats() {
    console.log(`${chalk.bold.white('Hostname:')} ${StatsModule.hostname}`);
    console.log(`${chalk.bold.red('Total Ram:')} ${StatsModule.totalRam}GB`);
    console.log(`${chalk.bold.blue('Platform:')} ${StatsModule.platform}`);
    console.log(`${chalk.bold.green('CPU Speed:')} ${StatsModule.CPU_speed}Mhz`);
    console.log(`${chalk.bold.yellow('System Uptime:')} ${ms_1.ms(StatsModule.sysUptime)}`);
}
exports.default = console_stats;
