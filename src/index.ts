import { Handler } from "./logic/Handler";
import './styles.css';

window.onload = () => {
    const handler = new Handler();

    handler.initialize();
}
