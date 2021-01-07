import assert from 'assert';
import { problem1, problem2 } from './day03.js';
import { parseInput } from './../parseInput.js';
import { knownInput, unknownInput } from './input.js';

const parsedKnownInput = parseInput(knownInput);
const parsedUnknownInput = parseInput(unknownInput);

describe('Day 3 - Part 1 - Known Input', () => {
    it('should count the trees encountered down the path', () => {
        assert.strictEqual(problem1(parsedKnownInput), 7);
    });
});

describe('Day 3 - Part 1 - Unknown Input', () => {
    it('should count the trees encountered down the path', () => {
        assert.strictEqual(problem1(parsedUnknownInput), 207);
    });
});

describe('Day 3 - Part 2 - Known Input', () => {
    it('should count the trees encountered down each path and find their product', () => {
        assert.strictEqual(problem2(parsedKnownInput), 336);
    });
});

describe('Day 3 - Part 2 - Unknown Input', () => {
    it('should count the trees encountered down each path and find their product', () => {
        assert.strictEqual(problem2(parsedUnknownInput), 2655892800);
    });
});