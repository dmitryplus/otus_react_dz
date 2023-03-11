import { describe, expect, test } from '@jest/globals';
import { sub } from '../../src/MathOperators/Subtraction';

describe('test MathOperators: Subtraction module', () => {
  test('Subtraction 0 - 0 to equal 0', () => {
    expect(sub(0, 0)).toBe(0);
  });

  test('Subtraction 2 - 1 to equal 1', () => {
    expect(sub(2, 1)).toBe(1);
  });

  test('Subtraction 2 - -1 to equal 3', () => {
    expect(sub(2, -1)).toBe(3);
  });

  test('Subtraction -2 - 1 to equal -1', () => {
    expect(sub(-2, -1)).toBe(-1);
  });
});
