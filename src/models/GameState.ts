import { PlayerState } from "./PlayerState";
import { EnvironmentState } from "./EnvironmentState";
import { Config } from "../constants/Config";
import { KeysState } from "../interfaces/KeysState";

export class GameState {
    playerState: PlayerState;
    environmentState: EnvironmentState;

    constructor() {
        this.playerState = {
            angle: 0,
        };
        this.environmentState = {
            coordinates: { X: 0, Y: 0}
        }
    }
    
    handleUpdate(keysState: KeysState): void {
        const { deltaX, deltaY } = this.calculateDelta(keysState);
        const { X, Y } = this.environmentState.coordinates;

        this.environmentState.coordinates.X = X + deltaX;
        this.environmentState.coordinates.Y = Y + deltaY;

        if (deltaX || deltaY) {
            console.log(this.environmentState.coordinates);
        }
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
