import { convertGridToBoard } from './dom-helpers';
import { getRandomGrid } from './grid-helpers';

let grid;

const gameSetup = () => {
  grid = getRandomGrid();
  convertGridToBoard(grid);
};

export default gameSetup;
