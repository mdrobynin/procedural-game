import { Color } from "../constants/Сolor";
import { Random } from "../utils/Random";

export class StarState {
    radius: number;
    color: Color;
    readonly random: Random;

    static colors: Color[] = [
        Color.AQUA,
        Color.BISQUE,
        Color.WHITE,
        Color.BLUE,
        Color.RED,
        Color.LIGHTGREEN,
        Color.YELLOW,
        Color.GREEN,
        Color.YELLOWGREEN,
        Color.LAVENDER
    ];

    constructor(random: Random) {
        this.random = random;

        this.radius = random.next() * 8 + 2;

        this.color = StarState.colors[Math.floor(random.next() * 11)];
    }
}