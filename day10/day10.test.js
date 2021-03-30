import {problem1, problem2} from "./day10.js";
import {knownInput, unknownInput, smallInput} from "./input.js";
import assert from "assert";

describe('Day 10 - part 1', () => {
    it('should find the chain of adapters and multiply the number of 1 by 3 jolt jumps for a known input', function () {
        assert.strictEqual(problem1(knownInput), 220);
    });
    it('should find the chain of adapters and multiply the number of 1 by 3 jolt jumps for an unknown input', function () {
        assert.strictEqual(problem1(unknownInput), 1700);
    });
});

describe('Day 10 - part 2', function () {
    it('should find the possible number of arrangements for a small known input', function () {
        assert.strictEqual(problem2(smallInput), 8);
    });
    it('should find the number of possible arrangements for adapters for a known input', function () {
       assert.strictEqual(problem2(knownInput), 19208);
    });
    it('should find the number of possible arrangements for adapters of an unknown input', function () {
        assert.strictEqual(problem2(unknownInput), 12401793332096);
    });
});