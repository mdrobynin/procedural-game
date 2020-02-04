import { Handler } from "./logic/Handler";
import './styles.css';
import { Renderer } from "./utils/Renderer";
import { Random } from "./utils/Random";

window.onload = () => {
    // const handler = new Handler();

    // handler.initialize();
    const renderer = new Renderer();

    document.addEventListener('keyup', event => {
        renderer.clear();
        const random = new Random(Math.floor(Math.random() * 1000));

        for (let i = 0; i < window.innerHeight / 20; i ++) {
            for (let j = 0; j < window.innerWidth / 20; j ++) {
                if (random.next() < 0.05) {
                    const radius = random.next() * 6 + 4;

                    renderer.drawCircle({
                        top: i * 20 + 10,
                        left: j * 20 + 10,
                        radius
                    })
                }
            }
        }
    });
}
