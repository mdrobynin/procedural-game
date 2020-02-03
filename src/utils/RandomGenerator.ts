import { GeneratorSeed } from "../interfaces/GeneratorSeed";

export class Random {
    state: GeneratorSeed;

    constructor(state: GeneratorSeed) {
        this.state = state;
    }

    private generate(state: GeneratorSeed): number {
        let t = state.a;
        const s = state.b;
        state.a = s;
        t ^= t<<23;
        t^= t>> 17;
        t ^= s ^ (s >> 26);
        state.b = t;
        return t + s;
    }

    public next(): number {
        return this.generate(this.state) / 4294967296
    }
}