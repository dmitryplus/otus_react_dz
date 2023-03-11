import { describe, expect, test } from '@jest/globals';
import { add } from '../../src/MathOperators/Addition';

describe('test MathOperators: Addition module', () => {
    test('Addition 0 + 0 to equal 0', () => {
        expect(add(0, 0)).toBe(0);
    });

    test('Addition 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('Addition 1 + -2 to equal -1', () => {
        expect(add(1, -2)).toBe(-1);
    });
});
