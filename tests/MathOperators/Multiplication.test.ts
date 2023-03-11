import { describe, expect, test } from '@jest/globals';
import { mult } from '../../src/MathOperators/Multiplication';

describe('test MathOperators: Multiplication module', () => {
  test('Multiplication 0 * 0 to equal 0', () => {
    expect(mult(0, 0)).toBe(0);
  });

  test('Multiplication 0 * 1 to equal 0', () => {
    expect(mult(0, 1)).toBe(0);
  });

  test('Multiplication 1 * 0 to equal 0', () => {
    expect(mult(1, 0)).toBe(0);
  });

  test('Multiplication 2 * 2 to equal 4', () => {
    expect(mult(2, 2)).toBe(4);
  });
});
