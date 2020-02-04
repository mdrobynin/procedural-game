export class Random {
    private seed: number;

    constructor(seed: number) {
        this.seed = seed;
    }

    public next(): number {
        let x = this.seed;
        x ^= x << 13;
        x ^= x >> 17;
        x ^= x << 5;
        this.seed = x;

	    return Math.abs(x) / 2147483648;
    }
}