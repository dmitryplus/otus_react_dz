import { describe, expect, test } from '@jest/globals';
import { Parser } from '../src/Parser';

describe('test parse input string: Parser module', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

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
            .mockImplementation(
                (action: string, nums: Array<string>): number => {
                    if (action === '+' && nums[0] === '2' && nums[1] === '3') {
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
            .mockImplementation(
                (action: string, nums: Array<string>): number => {
                    if (action === '-' && nums[0] === '2' && nums[1] === '3') {
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
            .mockImplementation(
                (action: string, nums: Array<string>): number => {
                    if (action === '*' && nums[0] === '2' && nums[1] === '3') {
                        return 1;
                    }

                    return 0;
                }
            );
        expect(parser.execute()).toBe(1);
        spy.mockRestore();
    });
    test('Parser set "3/1" to call MakeAction.execute', () => {
        const parser = new Parser('3/2');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementation(
                (action: string, nums: Array<string>): number => {
                    if (action === '/' && nums[0] === '3' && nums[1] === '2') {
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
            .mockImplementation(
                (action: string, nums: Array<string>): number => {
                    if (action === '+' && nums[0] === '2' && nums[1] === '3') {
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
            .mockImplementation(
                (action: string, nums: Array<string>): number => {
                    if (action === '+' && nums[0] === '2' && nums[1] === '3') {
                        return 1;
                    }

                    return 0;
                }
            );
        expect(parser.execute()).toBe(1);
        spy.mockRestore();
    });
    test('Parser set "223 + 3" to call MakeAction.execute', () => {
        const parser = new Parser('223 + 3');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementation(
                (action: string, nums: Array<string>): number => {
                    if (
                        action === '+' &&
                        nums[0] === '223' &&
                        nums[1] === '3'
                    ) {
                        return 1;
                    }

                    return 0;
                }
            );
        expect(parser.execute()).toBe(1);
        spy.mockRestore();
    });
    test('Parser set "2 + 3 + 3" to call MakeAction.execute', () => {
        const parser = new Parser('2 + 3 + 3');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    if (action === '+' && nums[0] === '2' && nums[1] === '3') {
                        return 1;
                    }

                    return 0;
                }
            )
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    if (action === '+' && nums[0] === '1' && nums[1] === '3') {
                        return 1;
                    }

                    return 0;
                }
            );

        expect(parser.execute()).toBe(1);
        spy.mockRestore();
    });

    test('Parser set "224 + 45 - 34" to call MakeAction.execute', () => {
        const parser = new Parser('224 + 45 - 34');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    if (
                        action === '+' &&
                        nums[0] === '224' &&
                        nums[1] === '45'
                    ) {
                        return 1;
                    }

                    return 0;
                }
            )
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    if (action === '-' && nums[0] === '1' && nums[1] === '34') {
                        return 1;
                    }

                    return 0;
                }
            );

        expect(parser.execute()).toBe(1);
        spy.mockRestore();
    });

    // test('Parser set "2 + 3 + 3 + 1" to call MakeAction.execute', () => {
    //     const parser = new Parser('2 + 3 + 3 + 1');
    //     const spy = jest
    //         .spyOn(parser, 'callMakeAction')
    //         .mockImplementation(mockCulc);
    //     expect(parser.execute()).toBe(9);
    //     spy.mockRestore();
    // });
    // test('Parser set "5 - 2 - 1" to call MakeAction.execute', () => {
    //     const parser = new Parser('5 - 2 - 1');
    //     const spy = jest
    //         .spyOn(parser, 'callMakeAction')
    //         .mockImplementationOnce(mockCulc);
    //     expect(parser.execute()).toBe(2);
    //     spy.mockRestore();
    // });
});
