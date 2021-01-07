import assert from 'assert';
import { problem1, problem2 } from './day06.js';
import { parseInput } from './day06.js';
import { knownInput, unknownInput } from './input.js';

const parsedKnownInput = parseInput(knownInput);
const parsedUnknownInput = parseInput(unknownInput);

describe('Day 6 - Part 1 - Known Input', () => {
    it('should find the highest boarding pass iD', () => {
        assert.strictEqual(problem1(parsedKnownInput), 11);
    });
});

describe('Day 6 - Part 1 - Unknown Input', () => {
    it('should find the highest boarding pass iD', () => {
        assert.strictEqual(problem1(parsedUnknownInput), 6351);
    });
});

describe('Day 6 - Part 1 - Known Input', () => {
    it('should find the highest boarding pass iD', () => {
        assert.strictEqual(problem2(parsedKnownInput), 6);
    });
});

describe('Day 6 - Part 1 - Known Input', () => {
    it('should find the highest boarding pass iD', () => {
        assert.strictEqual(problem2(parsedUnknownInput), 3143);
    });
});