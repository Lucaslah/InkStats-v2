const { StatsModule, ms } = require('../dist/index') // const { StatsModule, ms } = require('inkstats-v2')
const chalk = require('chalk') // npm i --save chalk or yarn add chalk

console.log(`${chalk.red('Total Ram:')} ${StatsModule.totalRam}GB`)
console.log(`${chalk.blue('Platform:')} ${StatsModule.platform}`)
console.log(`${chalk.green('CPU Speed:')} ${StatsModule.CPU_speed}Mhz`)
console.log(`${chalk.yellow('System Uptime:')} ${ms(StatsModule.sysUptime)}`)