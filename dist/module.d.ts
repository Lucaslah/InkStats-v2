/// <reference types="node" />
import { EventEmitter } from "events";
export declare class EventEmiter extends EventEmitter {
}
interface Options {
    port?: number;
    name?: string;
    message?: string;
}
export declare class InkStats {
    /**
     * The Port for your InkStats Instance to Run On
     */
    port: number | undefined;
    /**
     * A Message to be logged to your Console when your InkStats Instance Starts
     */
    message: string | undefined;
    /**
     * Sets the Title of your InkStats Instance, It will show on your InkStats Home Page
     */
    name: string | undefined;
    constructor(options: Options);
    private checks;
    private expressServer;
    /**
     * Starts your InkStats Instance
     */
    start: () => void;
    /**
     * Stops your InkStats Instance
     */
    kill: () => Promise<void>;
}
export {};
