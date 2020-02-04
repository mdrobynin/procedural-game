import { RectParams } from "../interfaces/RectParams";
import { CircleParams } from "../interfaces/CircleParams";
import { Config } from "../constants/Config";

export class Renderer {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;

    constructor() {
        const wrapper = document.getElementById('renderer-wrapper');
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        wrapper.appendChild(this.canvas);

        window.addEventListener('resize', () => {
            this.canvas.height = window.innerHeight;
            this.canvas.width = window.innerWidth;
        });
    }

    drawRect(params: RectParams): void {
        this.ctx.fillStyle = params.color || Config.DEFAULT_COLOR;
        this.ctx.beginPath();
        this.ctx.fillRect(params.left, params.top, params.width, params.height)
    }

    drawCircle(params: CircleParams): void {
        this.ctx.beginPath();
        this.ctx.arc(params.left, params.top, params.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = params.color || Config.DEFAULT_COLOR;
        this.ctx.fill();
    }

    clear(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}