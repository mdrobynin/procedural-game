import { Renderer } from "../utils/Renderer";
import { EnvironmentState } from "../models/EnvironmentState";
import { PlayerState } from "../models/PlayerState";
import { GameState } from "../models/GameState";
import { Color } from "../constants/Сolor";
import { Config } from "../constants/Config";

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
            top: window.innerHeight / 2 - Config.PLAYER_SIZE / 2,
            left: window.innerWidth / 2 - Config.PLAYER_SIZE / 2,
            radius: Config.PLAYER_SIZE,
            color: Color.AQUA
        })
    }

    private renderEnvironmentState(environmentState: EnvironmentState): void {

    }
}