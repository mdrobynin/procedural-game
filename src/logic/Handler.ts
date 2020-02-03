import { StateRenderer } from "./StateRenderer";
import { MainGameLoop } from "./MainGameLoop";
import { GameState } from "../models/GameState";
import { InputHandler } from "./InputHandler";

export class Handler {
    private readonly stateRenderer: StateRenderer;
    private readonly gameLoop: MainGameLoop;
    private readonly inputHandler: InputHandler;
    private readonly gameState: GameState;

    constructor() {
        this.stateRenderer = new StateRenderer();
        this.gameLoop = new MainGameLoop();
        this.inputHandler = new InputHandler();
        this.gameState = new GameState();
    }

    initialize(): void {
        this.gameLoop.addCallback(() => {
            this.gameState.handleUpdate(this.inputHandler.getState());
            this.stateRenderer.render(this.gameState);
        });

        this.gameLoop.start();
    }
}