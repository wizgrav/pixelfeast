import events from './events';
import Player from './player';
import * as dimensions from './dimensions';

let x = 0;
let y = 0;


export default {
  translate(ctx) {
    x = Math.max(0, Math.min(dimensions.VIEWPORT_WIDTH, Player.position[0] - Math.floor(dimensions.VIEWPORT_WIDTH / 2)));
    y = Math.max(0, Math.min(dimensions.VIEWPORT_HEIGHT, Player.position[1] - Math.floor(dimensions.VIEWPORT_HEIGHT / 2)));

    ctx.translate(-x, -y);
  },

  getPosition() {
    return { x, y };
  },
};
