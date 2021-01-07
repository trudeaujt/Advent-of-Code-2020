import assert from 'assert';
import { problem1, problem2 } from './day05.js';
import { parseInput } from '../parseInput.js';
import { knownInput, unknownInput } from './input.js';

const parsedKnownInput = parseInput(knownInput);
const parsedUnknownInput = parseInput(unknownInput);

describe('Day 4 - Part 1 - Known Input', () => {
    it('should find the highest boarding pass iD', () => {
        assert.strictEqual(problem1(parsedKnownInput), 820);
    });
});

describe('Day 4 - Part 1 - Unknown Input', () => {
    it('should find the highest boarding pass iD', () => {
        assert.strictEqual(problem1(parsedUnknownInput), 947);
    });
});

describe('Day 4 - Part 2 - Unknown Input', () => {
    it('should find the missing boarding pass iD', () => {
        assert.strictEqual(problem2(parsedUnknownInput), 636);
    });
});