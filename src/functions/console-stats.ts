import * as StatsModule from '../StatsModule'
import { ms } from "../ms"
import * as chalk from 'chalk'

function console_stats() {
    console.log(`${chalk.bold.white('Hostname:')} ${StatsModule.hostname}`) // Hostname
    console.log(`${chalk.bold.red('Total Ram:')} ${StatsModule.totalRam}GB`) // Total Ram
    console.log(`${chalk.bold.blue('Platform:')} ${StatsModule.platform}`) // platform
    console.log(`${chalk.bold.green('CPU Speed:')} ${StatsModule.CPU_speed}Mhz`) // CPU_speed
    console.log(`${chalk.bold.yellow('System Uptime:')} ${ms(StatsModule.sysUptime)}`) // sysUptime
    console.log(`${chalk.bold.magenta('CPU Model:')} ${StatsModule.CPU_model}`) // CPU_model
    console.log(`${chalk.bold.gray('CPU Cores:')} ${StatsModule.CPU_cores}`) // CPU_cores 
}

export default console_stats