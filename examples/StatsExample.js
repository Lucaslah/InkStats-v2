const { StatsModule, ms, Log } = require('../dist/index') // const { StatsModule, ms } = require('inkstats-v2')
const chalk = require('chalk') // npm i --save chalk or yarn add chalk

const log = new Log()

log.white('---- Using Chalk & Console.log ----')
console.log(`${chalk.red('Total Ram:')} ${StatsModule.totalRam}GB`)
console.log(`${chalk.blue('Platform:')} ${StatsModule.platform}`)
console.log(`${chalk.green('CPU Speed:')} ${StatsModule.CPU_speed}Mhz`)
console.log(`${chalk.yellow('System Uptime:')} ${ms(StatsModule.sysUptime)}`)

// or

log.white('---- Using the InkStats Logger ----')
log.red(`Total Ram: ${StatsModule.totalRam}`)
log.blue(`Platform: ${StatsModule.platform}`)
log.green(`CPU Speed: ${StatsModule.CPU_speed}Mhz`)
log.yellow(`System Uptime: ${ms(StatsModule.sysUptime)}`)