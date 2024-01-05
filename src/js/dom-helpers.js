import { createCandyPiece } from './piece-helpers';

const updateScore = (score) =>
  (document.querySelector('#score-display').textContent = score);

const emptyBoardSquare = (square) => {
  const { children } = square;
  for (const child of children) {
    child.remove();
  }
};

const clearBoard = () => {
  const squares = document.querySelectorAll('.square');
  for (const square of squares) {
    emptyBoardSquare(square);
  }
};

const convertGridToBoard = (grid) => {
  console.log('convertGridToBoard');
  clearBoard();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const gridCell = grid[i][j];
      const coords = [i, j];
      const boardSquare = document.querySelector(`[coords="${coords}"]`);
      const candyImg = createCandyPiece(gridCell);
      boardSquare.append(candyImg);
    }
  }
};

export { convertGridToBoard, updateScore };
