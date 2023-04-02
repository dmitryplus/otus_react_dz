import { describe, expect, test } from '@jest/globals';
import { MakeAction } from '../src/MakeAction';
import { mult } from '../src/MathOperators/Multiplication';
jest.mock('../src/MathOperators/Multiplication');
import { div } from '../src/MathOperators/Division';
jest.mock('../src/MathOperators/Division');
import { add } from '../src/MathOperators/Addition';
jest.mock('../src/MathOperators/Addition');
import { sub } from '../src/MathOperators/Subtraction';
jest.mock('../src/MathOperators/Subtraction');

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

    test('MakeAction set unknown action to catch Error', () => {
        const makeAction = new MakeAction();
        expect(() => {
            makeAction.execute('#', ['1', '1']);
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
        expect(makeAction.execute('/', ['1', '1'])).toBe(1);

        spy.mockRestore();
    });

    test('MakeAction set action + to call getAddition', () => {
        const makeAction = new MakeAction();
        const spy = jest
            .spyOn(makeAction, 'getAddition')
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .mockImplementation((a: number, b: number) => 1);
        expect(makeAction.execute('+', ['1', '1'])).toBe(1);

        spy.mockRestore();
    });

    test('MakeAction set action - to call getSubtraction', () => {
        const makeAction = new MakeAction();
        const spy = jest
            .spyOn(makeAction, 'getSubtraction')
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .mockImplementation((a: number, b: number) => 1);
        expect(makeAction.execute('-', ['1', '1'])).toBe(1);

        spy.mockRestore();
    });

    test('MakeAction method getMultiplication - to call mult', () => {
        const makeAction = new MakeAction();
        makeAction.getMultiplication(0, 0);

        expect(mult).toHaveBeenCalledTimes(1);
    });
    test('MakeAction method getDivision - to call div', () => {
        const makeAction = new MakeAction();
        makeAction.getDivision(0, 0);

        expect(div).toHaveBeenCalledTimes(1);
    });
    test('MakeAction method getAddition - to call add', () => {
        const makeAction = new MakeAction();
        makeAction.getAddition(0, 0);

        expect(add).toHaveBeenCalledTimes(1);
    });
    test('MakeAction method getSubtraction - to call sub', () => {
        const makeAction = new MakeAction();
        makeAction.getSubtraction(0, 0);

        expect(sub).toHaveBeenCalledTimes(1);
    });
});
