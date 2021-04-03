interface Options {
    number: Number;
}
export declare class ConsoleLog {
    number: Number;
    constructor(opt: Options);
    stats: (stats: String) => void;
    args: (msg: String) => Promise<void>;
}
export {};
