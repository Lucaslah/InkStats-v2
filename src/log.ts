import { red, blue, yellow, green, white } from "chalk"

export class Log {

    constructor() {}

    public white = (msg: string) => {
        console.log(white(msg))
    }

    public red = (msg: string) => {
        console.log(red(msg))
    }

    public blue = (msg: string) => {
        console.log(blue(msg))
    }

    public yellow = (msg: string) => {
        console.log(yellow(msg))
    }

    public green = (msg: string) => {
        console.log(green(msg))
    }

}