export const ParseInputToIntAndSort = (input) => input.split('\n')
  .map(x => Number.parseInt(x))
  .sort((a,b) => a - b);

export const parseInputToInt = (input) => input.split('\n')
  .map(x => Number.parseInt(x));

export const parseInput = (input) => input.split('\n');