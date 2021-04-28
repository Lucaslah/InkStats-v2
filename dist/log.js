"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const chalk_1 = require("chalk");
class Log {
    constructor() {
        this.white = (msg) => {
            console.log(chalk_1.white(msg));
        };
        this.red = (msg) => {
            console.log(chalk_1.red(msg));
        };
        this.blue = (msg) => {
            console.log(chalk_1.blue(msg));
        };
        this.yellow = (msg) => {
            console.log(chalk_1.yellow(msg));
        };
        this.green = (msg) => {
            console.log(chalk_1.green(msg));
        };
    }
}
exports.Log = Log;
