import { describe, expect, test } from '@jest/globals';
import { Parser } from '../src/Parser';

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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .mockImplementation(
                (action: string, nums: Array<string>): number => {
                    if (action === '+' && nums + '' === '2,3') {
                        return 1;
                    }
                    return 0;
                }
            );
        expect(parser.execute()).toBe(1);

        spy.mockRestore();
    });

    test('Parser set "2-3" to call MakeAction.execute', () => {
        const parser = new Parser('2-3');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .mockImplementation(
                (action: string, nums: Array<string>): number => {
                    if (action === '-' && nums + '' === '2,3') {
                        return 1;
                    }
                    return 0;
                }
            );
        expect(parser.execute()).toBe(1);

        spy.mockRestore();
    });

    test('Parser set "2*3" to call MakeAction.execute', () => {
        const parser = new Parser('2*3');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .mockImplementation(
                (action: string, nums: Array<string>): number => {
                    if (action === '*' && nums + '' === '2,3') {
                        return 1;
                    }
                    return 0;
                }
            );
        expect(parser.execute()).toBe(1);

        spy.mockRestore();
    });

    test('Parser set "2/3" to call MakeAction.execute', () => {
        const parser = new Parser('2/3');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .mockImplementation(
                (action: string, nums: Array<string>): number => {
                    if (action === '/' && nums + '' === '2,3') {
                        return 1;
                    }
                    return 0;
                }
            );
        expect(parser.execute()).toBe(1);

        spy.mockRestore();
    });

    test('Parser set "2 + 3" to call MakeAction.execute', () => {
        const parser = new Parser('2 + 3');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .mockImplementation(
                (action: string, nums: Array<string>): number => {
                    if (action === '+' && nums + '' === '2,3') {
                        return 1;
                    }
                    return 0;
                }
            );
        expect(parser.execute()).toBe(1);

        spy.mockRestore();
    });

    test('Parser set "  2 + 3  " to call MakeAction.execute', () => {
        const parser = new Parser('2 + 3');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .mockImplementation(
                (action: string, nums: Array<string>): number => {
                    if (action === '+' && nums + '' === '2,3') {
                        return 1;
                    }
                    return 0;
                }
            );
        expect(parser.execute()).toBe(1);

        spy.mockRestore();
    });
});
