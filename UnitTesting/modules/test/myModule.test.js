import { assert } from "chai";
import { sum } from "../myModule"
import { describe,it, expect, test } from "vitest";

describe('Sum Function', () => {
    it('should return the sum of two numbers', () => {
        expect(sum(1, 2)).toEqual(3)
    });
    it('testing assert for two numbers', () => {
        assert.equal(sum(1,2),3);
    });

    it('should return 0 if no arguments are passed', () => {
        expect(sum()).toBeFalsy;
    });

    it('should work with negative numbers', () => {
        expect(sum(-1, 2)).to.equal(1);
    });
});
