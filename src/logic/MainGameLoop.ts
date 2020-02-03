import { Config } from '../constants/Config';

export class MainGameLoop {
    private isLoopRunning: boolean = false;
    private timeout: any;
    private callbacks: Array<(args?: { [key: string]: any}) => any> = [];
    private callbackArgs: { [key: string]: any } = {};

    private loopTimeout(): void {
        if (this.isLoopRunning) {
            this.timeout = setTimeout(() => {
                this.callbacks.forEach(callback => callback(this.callbackArgs));
                this.loopTimeout();
            }, Config.LOOP_TIMESPAN);
        }
    }

    public addCallback(callback: (args?: { [key: string]: any }) => any): void {
        if (typeof callback === 'function') {
            this.callbacks.push(callback);
        }
    }

    public start(): void {
        this.isLoopRunning = true;
        clearTimeout(this.timeout);
        this.loopTimeout();
    }

    public pause(): void {
        clearTimeout(this.timeout);
        this.isLoopRunning = false;
    }
}