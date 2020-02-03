import { Color } from "../constants/Сolor";

export interface CircleParams {
    readonly radius: number;
    readonly top: number;
    readonly left: number;
    readonly color?: Color;
}