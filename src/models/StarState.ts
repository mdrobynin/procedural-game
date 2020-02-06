import { Color } from "../constants/Сolor";
import { Random } from "../utils/Random";
import { Config } from "../constants/Config";

const colors: Color[] = [
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

export class StarState {
    radius: number;
    color: Color;
    top: number;
    left: number;
    readonly isExists: boolean;
    readonly random: Random;

    constructor(random: Random) {
        this.random = random;
        this.isExists = this.random.nextDouble(0, 100) < 2;

        if (!this.isExists) return;

        this.radius = this.random.nextDouble(4, Config.CELL_SIZE / 2);
        this.color = colors[this.random.nextInt(0, 10)];
    }
}