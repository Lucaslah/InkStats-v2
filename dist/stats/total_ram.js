"use strict";
const stats_1 = require("../stats");
module.exports = {
    name: 'total_ram',
    execute() {
        console.log(stats_1.totalRam);
    },
};
