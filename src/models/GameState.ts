import { PlayerState } from "./PlayerState";
import { EnvironmentState } from "./EnvironmentState";
import { Config } from "../constants/Config";
import { KeysState } from "../interfaces/KeysState";
import { StarState } from "./StarState";
import { Random } from "../utils/Random";

export class GameState {
    playerState: PlayerState;
    environmentState: EnvironmentState;

    constructor() {
        this.playerState = {
            angle: 0,
        };
        this.environmentState = {
            coordinates: { X: 0, Y: 0},
            stars: []
        };
        this.updateEnvironment();
    }
    
    handleUpdate(keysState: KeysState): void {
        const { deltaX, deltaY } = this.calculateDelta(keysState);
        const { X, Y } = this.environmentState.coordinates;

        this.environmentState.coordinates.X = X + deltaX;
        this.environmentState.coordinates.Y = Y + deltaY;

        if (deltaX || deltaY) {
            this.updateEnvironment();
        }
    }

    private updateEnvironment(): void {
        const { X: envX, Y: envY } = this.environmentState.coordinates;
        const stars: StarState[] = [];
        const sectorsX = window.innerWidth / Config.CELL_SIZE;
        const sectorsY = window.innerHeight / Config.CELL_SIZE;
        const X = Number(envX.toFixed(0));
        const Y = Number(envY.toFixed(0));

        for (let x = 0; x < sectorsX; x ++) {
            for (let y = 0; y < sectorsY; y ++) {
                const seed1 = X + x;
                const seed2 = Y + y;
                const seed = (seed1 & 0xFFFF) << 16 | (seed2 & 0xFFFF);
                const random = new Random(seed);
                const star = new StarState(random);

                if (star.isExists) {
                    star.top = y * Config.CELL_SIZE + Config.CELL_SIZE / 2;
                    star.left = x * Config.CELL_SIZE + Config.CELL_SIZE / 2;
                    stars.push(star);
                }
            }
        }

        this.environmentState.stars = stars;
    }

    private calculateDelta(keysState: KeysState): { deltaX: number, deltaY: number} {
        const {
            isArrowUpPressed,
            isArrowDownPressed,
            isArrowLeftPressed,
            isArrowRightPressed,
        } = keysState;
        const delta = {
            deltaX: 0,
            deltaY: 0,
        }

        if (!isArrowDownPressed && !isArrowUpPressed && !isArrowLeftPressed && !isArrowRightPressed) {
            return delta;
        }

        if (isArrowUpPressed && isArrowDownPressed) {
            return delta;
        }

        if (isArrowLeftPressed && isArrowRightPressed) {
            return delta;
        }

        if (isArrowDownPressed) {
            if (isArrowLeftPressed) {
                delta.deltaX = Config.PLAYER_DIAGONAL_SPEED;
                delta.deltaY = -Config.PLAYER_DIAGONAL_SPEED;
            } else if (isArrowRightPressed) {
                delta.deltaX = Config.PLAYER_DIAGONAL_SPEED;
                delta.deltaY = Config.PLAYER_DIAGONAL_SPEED;
            } else {
                delta.deltaX = Config.PLAYER_SPEED;
            }

            return delta;
        }

        if (isArrowUpPressed) {
            if (isArrowLeftPressed) {
                delta.deltaX = -Config.PLAYER_DIAGONAL_SPEED;
                delta.deltaY = -Config.PLAYER_DIAGONAL_SPEED;
            } else if (isArrowRightPressed) {
                delta.deltaX = Config.PLAYER_DIAGONAL_SPEED;
                delta.deltaY = -Config.PLAYER_DIAGONAL_SPEED;
            } else {
                delta.deltaX = -Config.PLAYER_SPEED;
            }

            return delta;
        }

        if (isArrowLeftPressed) {
            if (isArrowDownPressed) {
                delta.deltaX = Config.PLAYER_DIAGONAL_SPEED;
                delta.deltaY = -Config.PLAYER_DIAGONAL_SPEED;
            } else if (isArrowUpPressed) {
                delta.deltaX = Config.PLAYER_DIAGONAL_SPEED;
                delta.deltaY = Config.PLAYER_DIAGONAL_SPEED;
            } else {
                delta.deltaY = - Config.PLAYER_SPEED;
            }

            return delta;
        }

        if (isArrowRightPressed) {
            if (isArrowDownPressed) {
                delta.deltaX = Config.PLAYER_DIAGONAL_SPEED;
                delta.deltaY = Config.PLAYER_DIAGONAL_SPEED;
            } else if (isArrowUpPressed) {
                delta.deltaX = -Config.PLAYER_DIAGONAL_SPEED;
                delta.deltaY = Config.PLAYER_DIAGONAL_SPEED;
            } else {
                delta.deltaY = Config.PLAYER_SPEED;
            }

            return delta;
        }
    }
}
