import { problem1, problem2 } from './day09.js'
import { knownInput, unknownInput } from './input.js'
import assert from "assert";

const PART1_KNOWN_RESULT = 127;
const PART1_UNKNOWN_RESULT = 373803594;
const PART2_KNOWN_RESULT = 62;
const PART2_UNKNOWN_RESULT = 51152360;

describe('Day 9 - Part 1', () => {
    it('should find the number that is not a sum of the previous five numbers for a known input', () => {
        assert.strictEqual(problem1(knownInput, 5), PART1_KNOWN_RESULT);
    });
    it('should find the number that is not a sum of the previous twenty five numbers for an unknown input',  () => {
        assert.strictEqual(problem1(unknownInput, 25), PART1_UNKNOWN_RESULT);
    });
})

describe(`Day 9 - Part 2`, () => {
    it('should find a contiguous set of at least two numbers adding up to the invalid number and sum the largest and smallest given known input', function () {
        //                         15 + 25 + 47 + 40 = 127, 15 + 47 = 62
        assert.strictEqual(problem2(knownInput, 127), PART2_KNOWN_RESULT)
    });
    it('should find a contiguous set of at least two numbers adding up to the invalid number and sum the largest and smallest given unknown input', function () {
        //                         15 + 25 + 47 + 40 = 127, 15 + 47 = 62
        assert.strictEqual(problem2(unknownInput, 373803594), PART2_UNKNOWN_RESULT)
    });
})