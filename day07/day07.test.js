import assert from 'assert';
import { problem1, problem2 } from './day07.js';
import { parseInput } from './day07.js';
import { knownInput, unknownInput } from './input.js';

const parsedKnownInput = parseInput(knownInput);
const parsedUnknownInput = parseInput(unknownInput);

describe('Day 7 - Part 1 - Known Input', () => {
    it('should find the number of bag colors that can eventually contain at least one shiny gold bag', () => {
        assert.strictEqual(problem1(parsedKnownInput), 4);
    });
});