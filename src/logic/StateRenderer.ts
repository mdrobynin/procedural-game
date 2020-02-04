import { Renderer } from "../utils/Renderer";
import { EnvironmentState } from "../models/EnvironmentState";
import { PlayerState } from "../models/PlayerState";
import { GameState } from "../models/GameState";

export class StateRenderer {
    private readonly playerRenderer: Renderer;
    private readonly environmentRenderer: Renderer;
    
    constructor() {
        this.playerRenderer = new Renderer();
    }

    public render(gameState: GameState): void {
        this.renderPlayerState(gameState.playerState);
        this.renderEnvironmentState(gameState.environmentState)
    }

    private renderPlayerState(playerState: PlayerState): void {
        this.playerRenderer.clear();
        this.playerRenderer.drawCircle({
            top: playerState.top,
            left: playerState.left,
            radius: 100
        })
    }

    private renderEnvironmentState(environmentState: EnvironmentState): void {

    }
}