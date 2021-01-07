import assert from 'assert';
import { problem1, problem2 } from './day01.js';
import { ParseInputToIntAndSort } from './../parseInput.js';
import { INPUT } from './input.js';

var parsedInput = ParseInputToIntAndSort(INPUT);

describe('Day 1 - Part One', () => {
  it('should find the product of the two numbers that sum to 2020', () => {
    assert.strictEqual(problem1(parsedInput, 2020), 712075);
  });
});

describe('Day 1 - Part Two', () => {
  it('should find the product of the three numbers that sum to 2020', () => {
    assert.strictEqual(problem2(parsedInput, 2020), 145245270);
  });
});