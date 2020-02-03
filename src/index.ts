import { Renderer } from "./utils/Renderer"
import { Color } from "./constants/Сolor";
import { MainGameLoop } from './logic/MainGameLoop';

window.onload = () => {
    const renderer = new Renderer({ canvasHeight: 600, canvasWidth: 900 });
    const loop = new MainGameLoop();
    let delta = 0;

    loop.addCallback(() => {
        renderer.clear();
        renderer.drawCircle({ top: 100 + delta, left: 200 + delta, radius: 50, color: Color.AQUA });
        delta += 5;
    });
    
    loop.start();
    // renderer.drawCircle({ top: 100 + delta, left: 200 + delta, radius: 50, color: Color.AQUA });
    // setTimeout(() => { renderer.clear(); renderer.drawCircle({ top: 200 + delta, left: 300 + delta, radius: 50, color: Color.AQUA });}, 1000);
}