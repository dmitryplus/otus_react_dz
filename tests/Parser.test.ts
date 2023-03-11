import { describe, expect, test } from '@jest/globals';
import { Parser } from '../src/Parser';

const mockCulc = (action: string, nums: Array<string>): number => {
    if (action === '+') {
        return +nums[0] + +nums[1];
    }
    if (action === '-') {
        return +nums[0] - +nums[1];
    }
    if (action === '*') {
        return +nums[0] * +nums[1];
    }
    if (action === '/') {
        return +nums[0] / +nums[1];
    }
    return 0;
};

describe('test parse input string: Parser module', () => {
    test('Parser set symbol to catch Error', () => {
        expect(() => {
            new Parser('asdase');
        }).toThrow();
    });

    test('Parser set empty string to catch Error', () => {
        expect(() => {
            new Parser('');
        }).toThrow();
    });

    test('Parser set only numbers to catch Error', () => {
        expect(() => {
            new Parser('56 76');
        }).toThrow();
    });

    test('Parser set only * to catch Error', () => {
        expect(() => {
            new Parser('*');
        }).toThrow();
    });

    test('Parser set only actions to catch Error', () => {
        expect(() => {
            new Parser('*++-//**');
        }).toThrow();
    });

    test('Parser set wrong action "2#3" to catch Error', () => {
        expect(() => {
            new Parser('2#3');
        }).toThrow();
    });

    test('Parser set "2+3" to call MakeAction.execute', () => {
        const parser = new Parser('2+3');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementation(mockCulc);
        expect(parser.execute()).toBe(5);

        spy.mockRestore();
    });

    test('Parser set "2-3" to call MakeAction.execute', () => {
        const parser = new Parser('2-3');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementation(mockCulc);
        expect(parser.execute()).toBe(-1);

        spy.mockRestore();
    });

    test('Parser set "2*3" to call MakeAction.execute', () => {
        const parser = new Parser('2*3');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementation(mockCulc);
        expect(parser.execute()).toBe(6);

        spy.mockRestore();
    });

    test('Parser set "3/1" to call MakeAction.execute', () => {
        const parser = new Parser('3/2');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementation(mockCulc);
        expect(parser.execute()).toBe(1.5);

        spy.mockRestore();
    });

    test('Parser set "2 + 3" to call MakeAction.execute', () => {
        const parser = new Parser('2 + 3');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementation(mockCulc);
        expect(parser.execute()).toBe(5);

        spy.mockRestore();
    });

    test('Parser set "  2 + 3  " to call MakeAction.execute', () => {
        const parser = new Parser('2 + 3');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementation(mockCulc);
        expect(parser.execute()).toBe(5);

        spy.mockRestore();
    });

    test('Parser set "2 + 3 + 3" to call MakeAction.execute', () => {
        const parser = new Parser('2 + 3 + 3');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementationOnce(mockCulc);

        expect(parser.execute()).toBe(8);

        spy.mockRestore();
    });

    test('Parser set "2 + 3 + 3 + 1" to call MakeAction.execute', () => {
        const parser = new Parser('2 + 3 + 3 + 1');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementation(mockCulc);

        expect(parser.execute()).toBe(9);

        spy.mockRestore();
    });
});
