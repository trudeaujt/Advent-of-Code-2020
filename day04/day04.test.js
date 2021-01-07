import assert from 'assert';
import { problem1, problem2 } from './day04.js';
import { parseInput } from './day04.js';
import { knownInput, unknownInput, validAndInvalid } from './input.js';

const parsedKnownInput = parseInput(knownInput);
const parsedUnknownInput = parseInput(unknownInput);
const parsedValidAndInvalid = parseInput(validAndInvalid);

describe('Day 4 - Part 1 - Known Input', () => {
    it('should do something', () => {
        assert.strictEqual(problem1(parsedKnownInput), 2);
    });
});

describe('Day 4 - Part 1 - Unknown Input', () => {
    it('should do something', () => {
        assert.strictEqual(problem1(parsedUnknownInput), 216);
    });
});

describe('Day 4 - Part 2 - Known Input', () => {
    it('should do something', () => {
        assert.strictEqual(problem2(parsedValidAndInvalid), 4);
    });
});

describe('Day 4 - Part 2 - Unknown Input', () => {
    it('should do something', () => {
        assert.strictEqual(problem2(parsedUnknownInput), 150);
    });
});