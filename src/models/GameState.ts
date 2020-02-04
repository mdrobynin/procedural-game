import { PlayerState } from "./PlayerState";
import { EnvironmentState } from "./EnvironmentState";
import { Config } from "../constants/Config";
import { KeysState } from "../interfaces/KeysState";

export class GameState {
    playerState: PlayerState;
    environmentState: EnvironmentState;

    constructor() {
        this.playerState = {
            top: 100,
            left: 100,
            angle: 0,
        };
    }
    
    handleUpdate(keysState: KeysState): void {
        this.handlePlayerMovement(keysState);
    }

    private handlePlayerMovement(keysState: KeysState): void {
        const {
            isArrowUpPressed,
            isArrowDownPressed,
            isArrowLeftPressed,
            isArrowRightPressed,
            isSpacePressed,
        } = keysState;

        if (isArrowUpPressed && isArrowDownPressed) {
            return;
        }

        if (isArrowLeftPressed && isArrowRightPressed) {
            return;
        }

        if (isArrowDownPressed) {
            if (isArrowLeftPressed) {
                this.playerState.left -= Config.PLAYER_DIAGONAL_SPEED;
                this.playerState.top += Config.PLAYER_DIAGONAL_SPEED;
            } else if (isArrowRightPressed) {
                this.playerState.left += Config.PLAYER_DIAGONAL_SPEED;
                this.playerState.top += Config.PLAYER_DIAGONAL_SPEED;
            } else {
                this.playerState.top += Config.PLAYER_SPEED;
            }

            return;
        }

        if (isArrowUpPressed) {
            if (isArrowLeftPressed) {
                this.playerState.left -= Config.PLAYER_DIAGONAL_SPEED;
                this.playerState.top -= Config.PLAYER_DIAGONAL_SPEED;
            } else if (isArrowRightPressed) {
                this.playerState.left += Config.PLAYER_DIAGONAL_SPEED;
                this.playerState.top -= Config.PLAYER_DIAGONAL_SPEED;
            } else {
                this.playerState.top -= Config.PLAYER_SPEED;
            }

            return;
        }

        if (isArrowLeftPressed) {
            if (isArrowDownPressed) {
                this.playerState.left -= Config.PLAYER_DIAGONAL_SPEED;
                this.playerState.top += Config.PLAYER_DIAGONAL_SPEED;
            } else if (isArrowUpPressed) {
                this.playerState.left -= Config.PLAYER_DIAGONAL_SPEED;
                this.playerState.top -= Config.PLAYER_DIAGONAL_SPEED;
            } else {
                this.playerState.left -= Config.PLAYER_SPEED;
            }

            return;
        }

        if (isArrowRightPressed) {
            if (isArrowDownPressed) {
                this.playerState.left += Config.PLAYER_DIAGONAL_SPEED;
                this.playerState.top += Config.PLAYER_DIAGONAL_SPEED;
            } else if (isArrowUpPressed) {
                this.playerState.left += Config.PLAYER_DIAGONAL_SPEED;
                this.playerState.top -= Config.PLAYER_DIAGONAL_SPEED;
            } else {
                this.playerState.left += Config.PLAYER_SPEED;
            }

            return;
        }
    }
}
