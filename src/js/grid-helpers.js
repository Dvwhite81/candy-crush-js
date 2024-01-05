import { getGridMatches } from './match-helpers';
import { pieces } from './piece-helpers';

const getRandomCell = () => {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
};

const isValidStartingGrid = (grid) => {
  const { rowMatches, columnMatches } = getGridMatches(grid);
  return rowMatches.length === 0 && columnMatches.length === 0;
};

const getRandomGrid = () => {
  const grid = [];
  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      const cell = getRandomCell();
      row.push(cell);
    }
    grid.push(row);
  }

  return isValidStartingGrid(grid) ? grid : getRandomGrid();
};

export { getGridMatches, getRandomGrid };
