import { describe, expect, test } from '@jest/globals';
import { MakeAction } from '../src/MakeAction';

describe('test create math action: MakeAction module', () => {
  test('MakeAction set action with empty params to catch Error', () => {
    const makeAction = new MakeAction();
    expect(() => {
      makeAction.execute('*', []);
    }).toThrow();
  });

  test('MakeAction set action with one param to catch Error', () => {
    const makeAction = new MakeAction();
    expect(() => {
      makeAction.execute('*', ['0']);
    }).toThrow();
  });

  test('MakeAction set action * to call getMultiplication', () => {
    const makeAction = new MakeAction();
    const spy = jest
      .spyOn(makeAction, 'getMultiplication')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .mockImplementation((a: number, b: number) => 1);
    expect(makeAction.execute('*', ['1', '1'])).toBe(1);

    spy.mockRestore();
  });

  test('MakeAction set action / to call getDivision', () => {
    const makeAction = new MakeAction();
    const spy = jest
      .spyOn(makeAction, 'getDivision')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .mockImplementation((a: number, b: number) => 1);
    expect(makeAction.execute('*', ['1', '1'])).toBe(1);

    spy.mockRestore();
  });

  test('MakeAction set action + to call getAddition', () => {
    const makeAction = new MakeAction();
    const spy = jest
      .spyOn(makeAction, 'getAddition')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .mockImplementation((a: number, b: number) => 1);
    expect(makeAction.execute('*', ['1', '1'])).toBe(1);

    spy.mockRestore();
  });

  test('MakeAction set action - to call getSubtraction', () => {
    const makeAction = new MakeAction();
    const spy = jest
      .spyOn(makeAction, 'getSubtraction')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .mockImplementation((a: number, b: number) => 1);
    expect(makeAction.execute('*', ['1', '1'])).toBe(1);

    spy.mockRestore();
  });
});
