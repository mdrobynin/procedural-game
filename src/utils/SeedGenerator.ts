export const getSeed = (a: number, b: number): number => {
    let t = a;
    let s = b;

    t ^= t << 23;
	t ^= t >> 17;
    t ^= s ^ (s >> 26);

	return t + s;
}
