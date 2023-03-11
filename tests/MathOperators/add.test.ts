import { describe, expect, test } from '@jest/globals';
import { add } from '../../src/MathOperators/Add';

describe('test MathOperators: Add module', () => {
  test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('adds 1 + -2 to equal -1', () => {
    expect(add(1, -2)).toBe(-1);
  });
});
