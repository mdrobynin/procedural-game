import { Color } from "../constants/Сolor";

export interface RectParams {
	readonly width: number;
	readonly height: number;
	readonly top: number;
	readonly left: number;
	readonly color?: Color;
}
