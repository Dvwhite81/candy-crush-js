const getColumn = (grid, j) => {
  const result = Array.from({ length: grid.length });
  for (const [i, element] of grid.entries()) {
    result[i] = element[j];
  }
  return result;
};

const isAMatch = (first, second, third) => {
  return first === second && second === third;
};

const getArrMatches = (arr) => {
  const arrMatches = [];

  const { length } = arr;
  let j = 0;
  // Might need < length instead of <= length
  while (j + 2 <= length) {
    const [a, b, c] = [j, j + 1, j + 2];
    const [one, two, three] = [arr[a], arr[b], arr[c]];
    if (isAMatch(one, two, three)) {
      const currentMatch = [a, b, c];
      let next = j + 3;
      while (next < length && arr[next] === one) {
        currentMatch.push(next);
        next++;
      }
      arrMatches.push(currentMatch);
      j = next;
    }
    j++;
  }
  return arrMatches;
};

const checkRows = (grid, i) => {
  const row = grid[i];
  const matches = getArrMatches(row);
  return matches.length > 0 ? matches : [];
};

const checkColumns = (grid, j) => {
  const column = getColumn(grid, j);
  const matches = getArrMatches(column);
  return matches.length > 0 ? matches : [];
};

const getGridMatches = (grid) => {
  const rowMatches = [];
  const columnMatches = [];

  let i = 0;
  while (i < grid.length) {
    const matches = checkRows(grid, i);
    if (matches.length > 0) {
      rowMatches.push({ row: i, columns: matches });
    }
    i++;
  }

  let j = 0;
  while (j < grid[0].length) {
    const matches = checkColumns(grid, j);
    if (matches.length > 0) {
      columnMatches.push({ column: j, rows: matches });
    }
    j++;
  }

  return { rowMatches, columnMatches };
};

export { getGridMatches, getColumn };
