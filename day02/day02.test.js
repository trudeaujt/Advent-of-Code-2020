import assert from 'assert';
import { problem1, problem2 } from './day02.js';
import { parseInput } from './../parseInput.js';
import { INPUT } from './input.js';

const knownInput = parseInput(
`1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`);

var parsedInput = parseInput(INPUT);

describe('Day 2 - Part One - Known Input', () => {
    it('should find passwords that match the criteria for known input', () => {
        assert.strictEqual(problem1(knownInput), 2)
    });
});

describe('Day 2 - Part One - Unknown Input', () => {
    it('should find passwords that match the criteria for unknown input', () => {
        assert.strictEqual(problem1(parsedInput), 477);
    });
});

describe('Day 2 - Part Two - Known Input', () => {
    it('should find passwords that match the criteria for known input', () => {
        assert.strictEqual(problem2(knownInput), 1)
    });
});

describe('Day 2 - Part Two - Unknown Input', () => {
    it('should find passwords that match the criteria for unknown input', () => {
        assert.strictEqual(problem2(parsedInput), 686)
    });
});