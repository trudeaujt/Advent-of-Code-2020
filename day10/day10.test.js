import {problem1, problem2} from "./day10.js";
import {knownInput, unknownInput} from "./input.js";
import assert from "assert";

describe('Day 10 - part 1', () => {
    it('should find the chain of adapters and multiply the number of 1 by 3 jolt jumps for a known input', function () {
        assert.strictEqual(problem1(knownInput), 220);
    });
    it('should find the chain of adapters and multiply the number of 1 by 3 jolt jumps for an unknown input', function () {
        assert.strictEqual(problem1(unknownInput), 220);
    });
});