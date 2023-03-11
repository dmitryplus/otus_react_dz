import { describe, expect, test } from '@jest/globals';
import { subtract } from '../../src/MathOperators/Subtract';

describe('test MathOperators: Subtract module', () => {
  test('subtract 0 - 0 to equal 0', () => {
    expect(subtract(0, 0)).toBe(0);
  });

  test('subtract 2 - 1 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1);
  });

  test('subtract 2 - -1 to equal 3', () => {
    expect(subtract(2, -1)).toBe(3);
  });

  test('subtract -2 - 1 to equal -1', () => {
    expect(subtract(-2, -1)).toBe(-1);
  });
});
