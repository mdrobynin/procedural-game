import { Color } from './Сolor';

const PLAYER_SPEED = 10;

export const Config = {
    DEFAULT_COLOR: Color.BLACK,
    LOOP_TIMESPAN: 1000 / 60,
    PLAYER_SIZE: 10,
    PLAYER_SPEED,
    PLAYER_DIAGONAL_SPEED: PLAYER_SPEED / Math.sqrt(2)
};
