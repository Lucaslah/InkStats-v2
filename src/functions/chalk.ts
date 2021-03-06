import { green } from "chalk"
import { underline } from "chalk"
import { blue } from "chalk"

import { appName } from "../config";

async function chalk_init(argv) {
console.log(`${blue.bold(`${appName}`)} is ${green.bold('Running')} at: ${underline.yellow.red.bold(`http://localhost:${argv.port}`)}`)
}

export default chalk_init;