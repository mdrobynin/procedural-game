import { StarState } from "./StarState"

export class EnvironmentState {
    coordinates: {
        X: number;
        Y: number;
    }
    stars: StarState[];
}