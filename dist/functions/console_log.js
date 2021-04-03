"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLog = void 0;
const LOGIC = require("../stats");
const NAMES = require("../Names");
const command_line_usage_1 = require("./command_line_usage");
const commandLineUsage = require('command-line-usage');
class ConsoleLog {
    constructor(opt) {
        this.stats = (stats) => {
            if (stats === 'totalram') {
                console.log(NAMES.totalRam + ': ' + LOGIC.totalRam);
            }
            else if (stats === 'platform') {
                console.log(NAMES.platform + ': ' + LOGIC.platform);
            }
            else if (stats === 'CPU_model') {
                console.log(NAMES.CPU_model + ': ' + LOGIC.CPU_model);
            }
            else if (stats === 'CPU_speed') {
                console.log(NAMES.CPU_speed + ': ' + LOGIC.CPU_speed);
            }
            else if (stats === 'CPU_cores') {
                console.log(NAMES.CPU_cores + ': ' + LOGIC.CPU_cores);
            }
            else if (stats === 'sysUptime') {
                console.log(NAMES.sysUptime + ': ' + LOGIC.sysUptime);
            }
            else if (stats === 'hostname') {
                console.log(NAMES.hostname + ': ' + LOGIC.hostname);
            }
        };
        this.args = (msg) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(msg);
            }
            finally {
                console.log(commandLineUsage(command_line_usage_1.default));
            }
        });
        this.number = opt.number;
    }
}
exports.ConsoleLog = ConsoleLog;
