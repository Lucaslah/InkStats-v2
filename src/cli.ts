import { port, run_with_color, appName } from "./config";
import app from './app'

import chalk_init from './functions/chalk'
import sections from './functions/command_line_usage'
import console_stats from "./functions/console-stats"

import { ConsoleLog } from "./functions/console_log"

const clientLog = new ConsoleLog({ number: 1 })
import { readdirSync, stat } from "fs"

const commandLineUsage = require('command-line-usage')

const logger = require('morgan');

const InkStatsName = appName
const CLI_name = InkStatsName.toLowerCase()

// Yargs
import yargs, { global } from 'yargs'
const { hideBin } = require('yargs/helpers')

const appport = process.env.PORT || port || 8080


const usageargs = process.argv.slice(2)
if (!usageargs[0]) console.log(commandLineUsage(sections))

yargs(hideBin(process.argv))
.scriptName(CLI_name)

  .command('serve [port]', 'starts the server', (yargs) => {
    yargs
      .positional('port', {
        describe: 'port to bind on',
        alias: 'p',
        default: appport
      })
  }, (argv) => {

    if (argv.no_color) {

      // @ts-ignore
      app.listen(argv.port, () => {
        console.log(`${InkStatsName} is Running at: http://localhost:${argv.port}`);
    });
      
    } else {

    const CLI_color = process.env.run_with_color || run_with_color

    if (CLI_color) {

      // @ts-ignore
        app.listen(argv.port, () => {
    
            chalk_init(argv)
            
            });
    
    } else {

      // @ts-ignore
        app.listen(argv.port, () => {
            console.log(`${InkStatsName} is Running at: http://localhost:${argv.port}`);
        });

      }
}

    if (argv.debug) console.info(`Running ${InkStatsName} in Debeg Mode`) + app.use(logger('dev'));


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
      })
  }, (argv) => {
    if (argv.stats === 'all') {
      console_stats()
    } else if (argv.stats === 'totalram') {
        clientLog.stats('totalram')
    } else if (argv.stats === 'platform') {
        clientLog.stats('platform')
    } else if (argv.stats === 'CPU_model') {
      clientLog.stats('CPU_model')
    } else if (argv.stats === 'CPU_speed') {
      clientLog.stats('CPU_speed')
    } else if (argv.stats === 'CPU_cores') {
      clientLog.stats('CPU_cores')
    } else if (argv.stats === 'sysUptime') {
      clientLog.stats('sysUptime')
    } else if (argv.stats === 'hostname') {
      clientLog.stats('hostname')
    } else {
      clientLog.args('Invalid Command')
    }

  })

  .argv;
