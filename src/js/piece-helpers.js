import { buildElement } from './dom-setup';

const Blue = '/blue.png';
const BlueH = '/blue-h.png';
const BlueV = '/blue-v.png';
const BlueW = '/blue-w.png';
const Bomb = '/bomb.png';
const Green = '/green.png';
const GreenH = '/green-h.png';
const GreenV = '/green-v.png';
const GreenW = '/green-w.png';
const Orange = '/orange.png';
const OrangeH = '/orange-h.png';
const OrangeV = '/orange-v.png';
const OrangeW = '/orange-w.png';
const Purple = '/purple.png';
const PurpleH = '/purple-h.png';
const PurpleV = '/purple-v.png';
const PurpleW = '/purple-w.png';
const Red = '/red.png';
const RedH = '/red-h.png';
const RedV = '/red-v.png';
const RedW = '/red-w.png';
const Yellow = '/yellow.png';
const YellowH = '/yellow-h.png';
const YellowV = '/yellow-v.png';
const YellowW = '/yellow-w.png';

const pieces = ['B', 'G', 'O', 'P', 'R', 'Y'];

const getPieceColor = (cell) => {
  console.log('getPieceColor cell:', cell);
  let color;
  switch (cell) {
    case 'B':
    case 'blue-h':
    case 'blue-v':
    case 'blue-w': {
      console.log('case B');
      color = 'blue';
      break;
    }
    case 'G':
    case 'green-h':
    case 'green-v':
    case 'green-w': {
      console.log('case G');
      color = 'green';
      break;
    }
    case 'O':
    case 'orange-h':
    case 'orange-v':
    case 'orange-w': {
      console.log('case O');
      color = 'orange';
      break;
    }
    case 'P':
    case 'purple-h':
    case 'purple-v':
    case 'purple-w': {
      console.log('case P');
      color = 'purple';
      break;
    }
    case 'R':
    case 'red-h':
    case 'red-v':
    case 'red-w': {
      console.log('case R');
      color = 'red';
      break;
    }
    case 'Y':
    case 'yellow-h':
    case 'yellow-v':
    case 'yellow-w': {
      console.log('case Y');
      color = 'yellow';
      break;
    }
    default: {
      break;
    }
  }
  return color;
};

const getPieceSrc = (cell) => {
  console.log('getPieceSrc cell:', cell);
  let src;
  switch (cell) {
    case 'B': {
      src = Blue;
      break;
    }
    case 'G': {
      src = Green;
      break;
    }
    case 'O': {
      src = Orange;
      break;
    }
    case 'P': {
      src = Purple;
      break;
    }
    case 'R': {
      src = Red;
      break;
    }
    case 'Y': {
      src = Yellow;
      break;
    }
    case 'blue-h': {
      src = BlueH;
      break;
    }
    case 'blue-v': {
      src = BlueV;
      break;
    }
    case 'blue-w': {
      src = BlueW;
      break;
    }
    case 'green-h': {
      src = GreenH;
      break;
    }
    case 'green-v': {
      src = GreenV;
      break;
    }
    case 'green-w': {
      src = GreenW;
      break;
    }
    case 'orange-h': {
      src = OrangeH;
      break;
    }
    case 'orange-v': {
      src = OrangeV;
      break;
    }
    case 'orange-w': {
      src = OrangeW;
      break;
    }
    case 'purple-h': {
      src = PurpleH;
      break;
    }
    case 'purple-v': {
      src = PurpleV;
      break;
    }
    case 'purple-w': {
      src = PurpleW;
      break;
    }
    case 'red-h': {
      src = RedH;
      break;
    }
    case 'red-v': {
      src = RedV;
      break;
    }
    case 'red-w': {
      src = RedW;
      break;
    }
    case 'yellow-h': {
      src = YellowH;
      break;
    }
    case 'yellow-v': {
      src = YellowV;
      break;
    }
    case 'yellow-w': {
      src = YellowW;
      break;
    }
    case 'bomb': {
      src = Bomb;
      break;
    }
    default: {
      break;
    }
  }
  return src;
};

const createCandyPiece = (cell) => {
  console.log('createCandyPiece cell:', cell);
  const color = getPieceColor(cell);
  console.log('createCandyPiece color:', color);
  const src = getPieceSrc(cell);
  console.log('createCandyPiece src:', src);
  return buildElement('img', {
    className: `candy candy-${color}`,
    src,
    alt: `candy-${color}`,
  });
};

export { createCandyPiece, pieces, getPieceColor, getPieceSrc };
