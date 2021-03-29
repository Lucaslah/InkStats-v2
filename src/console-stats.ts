import * as StatsModule from './StatsModule'
import { ms } from "./ms"
import * as chalk from 'chalk'

function console_stats() {
    console.log(`${chalk.bold.white('Hostname:')} ${StatsModule.hostname}`)
    console.log(`${chalk.bold.red('Total Ram:')} ${StatsModule.totalRam}GB`)
    console.log(`${chalk.bold.blue('Platform:')} ${StatsModule.platform}`)
    console.log(`${chalk.bold.green('CPU Speed:')} ${StatsModule.CPU_speed}Mhz`)
    console.log(`${chalk.bold.yellow('System Uptime:')} ${ms(StatsModule.sysUptime)}`)
}

export default console_stats