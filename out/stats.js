"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sysUptime = exports.CUP_cores = exports.CPU_speed = exports.CPU_model = exports.platform = exports.totalRam = void 0;
const os = require("os");
const ms = require('ms');
// Get MEM Info:
var total_memory = os.totalmem();
var total_mem_in_kb = total_memory / 1024;
var total_mem_in_mb = total_mem_in_kb / 1024;
var total_mem_in_gb = total_mem_in_mb / 1024;
total_mem_in_kb = Math.floor(total_mem_in_kb);
total_mem_in_mb = Math.floor(total_mem_in_mb);
total_mem_in_gb = Math.floor(total_mem_in_gb);
total_mem_in_mb = total_mem_in_mb % 1024;
total_mem_in_kb = total_mem_in_kb % 1024;
total_memory = total_memory % 1024;
const core = os.cpus()[0];
exports.totalRam = `${total_mem_in_gb + " GB "}`;
exports.platform = process.platform;
exports.CPU_model = core.model;
exports.CPU_speed = `${core.speed}Mhz`;
exports.CUP_cores = os.cpus().length;
exports.sysUptime = `${ms(os.uptime() * 1000, { long: true })}`;
