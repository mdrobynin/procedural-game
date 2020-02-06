import { Handler } from "./logic/Handler";
import './styles.css';
import { Config } from "./constants/Config";
import { Random } from "./utils/Random";
import { StarState } from "./models/StarState";
import { StateRenderer } from "./logic/StateRenderer";
import { GameState } from "./models/GameState";

window.onload = () => {
    const handler = new Handler();

    handler.initialize();

    // const gameState = new GameState();
    // const stateRenderer = new StateRenderer();
    // const stars: StarState[] = [];
    // const sectorsX = window.innerWidth / Config.CELL_SIZE;
    // const sectorsY = window.innerHeight / Config.CELL_SIZE;
    // const X = 0;
    // const Y = 0;
    // const deltaX = 0;
    // const deltaY = 0;

    // for (let x = 0; x < sectorsX; x ++) {
    //     for (let y = 0; y < sectorsY; y ++) {
    //         const seed1 = X + x;
    //         const seed2 = Y + y;
    //         const seed = (seed1 & 0xFFFF) << 16 | (seed2 & 0xFFFF);
    //         const random = new Random(seed);
    //         const star = new StarState(random);

    //         if (star.isExists) {
    //             star.top = deltaY+ y * Config.CELL_SIZE + Config.CELL_SIZE / 2;
    //             star.left = deltaX + x * Config.CELL_SIZE + Config.CELL_SIZE / 2;
    //             stars.push(star);
    //         }
    //     }
    // }

    // gameState.environmentState.stars = stars;

    // stateRenderer.render(gameState);
}
