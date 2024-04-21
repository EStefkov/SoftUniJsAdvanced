const {expect, assert}  = require('chai')
import { sum } from "./myModule"

describe('Sum Function', () => {
    it('should return the sum of two numbers', () => {
        assert.equal(sum(1,2), 3);
        expect(sum(1, 2)).to.equal(3);
    });

    it('should return 0 if no arguments are passed', () => {
        expect(sum()).to.equal(0);
    });

    it('should return the number itself if only one argument is passed', () => {
        expect(sum(5)).to.equal(5);
    });

    it('should work with negative numbers', () => {
        expect(sum(-1, 2)).to.equal(1);
    });
});
