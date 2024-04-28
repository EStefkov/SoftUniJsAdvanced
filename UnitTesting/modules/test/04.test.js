import { sum } from  "../04"
import { describe,it, expect, test } from "vitest";

describe ('Sum numbers', () => {
    it( 'Should sum one number ', () => {
        expect(sum([1])).toBe(1);
    });
    it( 'Should sum multiple numbers ', () => {
        expect(sum([1,1])).toBe(2);
    });
    it( 'Should different numbers ', () => {
        expect(sum([1,2,3])).toBe(6);
    });
})
