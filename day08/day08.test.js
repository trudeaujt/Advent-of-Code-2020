import assert from 'assert';
import { problem1, problem2 } from './day08.js';
import { parseInput } from './day08.js';
import { knownInput, unknownInput } from './input.js';

const parsedKnownInput = parseInput(knownInput);
const parsedUnknownInput = parseInput(unknownInput);
const parsedKnownInputPart2 = parseInput(knownInput);
const parsedUnknownInputPart2 = parseInput(unknownInput);

describe('Day 8 - Part 1 - Known Input', () => {
    it('should find the value of the accumulator before looping for a known input', () => {
        assert.strictEqual(problem1(parsedKnownInput).accumulator, 5);
    });
});

describe('Day 8 - Part 1 - Unknown Input', () => {
    it('should find the value of the accumulator before looping for an unknown input', () => {
        assert.strictEqual(problem1(parsedUnknownInput).accumulator, 1137);
    });
});

describe('Day 8 - Part 2 - Known Input', () => {
    it('should find the value of the accumulator while fixing the code for a known input', () => {
        assert.strictEqual(problem2(parsedKnownInputPart2), 8);
    });
});

describe('Day 8 - Part 2 - Unknown Input', () => {
    it('should find the value of the accumulator while fixing the code for an unknown input', () => {
        assert.strictEqual(problem2(parsedUnknownInputPart2), 8);
    });
});