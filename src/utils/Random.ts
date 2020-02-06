export class Random {
    private seed: number;

    constructor(seed: number) {
        this.seed = seed;
    }

    public nextDouble(min: number, max: number): number {
        return (this.next() / 2147483648) * (max - min) + min;
    }

    public nextInt(min: number, max: number): number {
        return (this.next() % (max - min)) + min;
    }

    private next(): number {
        let x = this.seed;
        x ^= x << 13;
        x ^= x >> 17;
        x ^= x << 5;
        this.seed = x;

	    return Math.abs(x);
    }
}