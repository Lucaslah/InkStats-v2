import * as LOGIC from "../stats"
import * as NAMES from "../Names"
import sections from "./command_line_usage"
const commandLineUsage = require('command-line-usage')

interface Options {
   number: Number;
}

export class ConsoleLog {
    public number: Number
    constructor(opt: Options) {
        this.number = opt.number;
    }
    public stats = (stats: String) => {
    if (stats === 'totalram') {
        console.log(NAMES.totalRam + ': ' + LOGIC.totalRam)
    } else if (stats === 'platform') {
        console.log(NAMES.platform + ': ' + LOGIC.platform)
    } else if (stats === 'CPU_model') {
        console.log(NAMES.CPU_model + ': ' + LOGIC.CPU_model)
    } else if (stats === 'CPU_speed') {
        console.log(NAMES.CPU_speed + ': ' + LOGIC.CPU_speed)
    } else if (stats === 'CPU_cores') {
        console.log(NAMES.CPU_cores + ': ' + LOGIC.CPU_cores)
    } else if (stats === 'sysUptime') {
        console.log(NAMES.sysUptime + ': ' + LOGIC.sysUptime)
    } else if (stats === 'hostname') {
        console.log(NAMES.hostname + ': ' + LOGIC.hostname)
    }   
}

public args = async (msg: String) => {
    try {
        console.log(msg)
    } finally {
        console.log(commandLineUsage(sections))
    }
}

}