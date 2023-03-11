import { describe, expect, test } from '@jest/globals';
import { div } from '../../src/MathOperators/Division';

describe('test MathOperators: Division module', () => {
    test('Division 0 / 1 to equal 0', () => {
        expect(div(0, 1)).toBe(0);
    });

    test('Division 2 / 1 to equal 2', () => {
        expect(div(2, 1)).toBe(2);
    });

    test('Division 4 / 2 to equal 2', () => {
        expect(div(4, 2)).toBe(2);
    });

    test('Division 3 / 2 to equal 1.5', () => {
        expect(div(3, 2)).toBe(1.5);
    });

    test('Division 1 / 0 to catch Error', () => {
        expect(() => {
            div(1, 0);
        }).toThrow();
    });
});
