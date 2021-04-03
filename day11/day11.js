const parseInput = (string) => {
    return string.split("\n");
}

const tile = {
    FLOOR: '.',
    EMPTY: 'L',
    OCCUPIED: '#'
}

const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [ 0, -1], /*****/  [ 0, 1],
    [ 1, -1], [ 1, 0], [ 1, 1]
];


const countNeighbors = (grid, row, col) => {
    let count = 0;
    for (const index in directions) {
        let dir = directions[index];
    }
}

const updateCellBasedOnNeighbors = (grid, row, col) => {
    if(grid[row][col] === tile.FLOOR)
        return tile.FLOOR;

    let count = countNeighbors(grid, row, col);
    if(count >= 4)
        return tile.EMPTY;

    return tile.OCCUPIED;
}

const updateGrid = (grid) => {
    let newGrid = Array.from(Array(grid.length), () => new Array(grid[0].length));
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            newGrid[row][col] = updateCellBasedOnNeighbors(grid, row, col);
        }
    }
    debugger;
    return newGrid;
}

export const problem1 = (inputString) => {
    let grid = parseInput(inputString);

    let newGrid = updateGrid(grid);

    while (newGrid !== grid)
        newGrid = updateGrid(grid);
}

export const problem2 = (inputString) => {
}