import { problem1, problem2 } from './day09.js'
import { knownInput, unknownInput } from './input.js'
import assert from "assert";

const PART1_KNOWN_RESULT = 127;
const PART1_UNKNOWN_RESULT = 373803594;

describe('Day 9 - Part 1', () => {
    it('should find the number that is not a sum of the previous five numbers for a known input', () => {
        assert.strictEqual(problem1(knownInput, 5), PART1_KNOWN_RESULT);
    });
    it('should find the number that is not a sum of the previous twenty five numbers for an unknown input', function () {
        assert.strictEqual(problem1(unknownInput, 25), PART1_UNKNOWN_RESULT);
    });
})
