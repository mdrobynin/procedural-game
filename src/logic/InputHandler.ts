import { Key } from "../constants/Key";
import { KeysState } from "../interfaces/KeysState";

export class InputHandler {
    private keysState: KeysState;

    constructor() {
        this.keysState = {
            isArrowUpPressed: false,
            isArrowDownPressed: false,
            isArrowLeftPressed: false,
            isArrowRightPressed: false,
            isSpacePressed: false,
        }

        document.addEventListener('keyup', (event: KeyboardEvent) => {
            this.handleEvent(event, 'keyup');
        });

        document.addEventListener('keydown', (event: KeyboardEvent) => {
            this.handleEvent(event, 'keydown');
        });
    }

    public getState(): KeysState {
        return this.keysState;
    }

    private handleEvent(event: KeyboardEvent, mode: 'keyup' | 'keydown') {
        const isKeyDown = mode === 'keydown';

        switch (event.code) {
            case Key.ARROW_DOWN: {
                this.keysState.isArrowDownPressed = isKeyDown;
                break;
            }
            case Key.ARROW_LEFT: {
                this.keysState.isArrowLeftPressed = isKeyDown;
                break;
            }
            case Key.ARROW_UP: {
                this.keysState.isArrowUpPressed = isKeyDown;
                break;
            }
            case Key.ARROW_RIGHT: {
                this.keysState.isArrowRightPressed = isKeyDown;
                break;
            }
            case Key.SPACE: {
                this.keysState.isSpacePressed = isKeyDown;
                break;
            }
            default:
                break;
        }
    }
}