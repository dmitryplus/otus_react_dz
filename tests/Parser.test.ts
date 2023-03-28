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
    test('Parser set "3/2" to call MakeAction.execute', () => {
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
        const parser = new Parser(' 2 + 3 ');
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
                        return 5;
                    }

                    return 0;
                }
            )
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    if (action === '+' && nums[0] === '5' && nums[1] === '3') {
                        return 8;
                    }

                    return 0;
                }
            );

        expect(parser.execute()).toBe(8);
        spy.mockRestore();
    });

    test('Parser set "22644 + 4532 - 340" to call MakeAction.execute', () => {
        const parser = new Parser('22644 + 4532 - 340');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    if (
                        action === '+' &&
                        nums[0] === '22644' &&
                        nums[1] === '4532'
                    ) {
                        return 27176;
                    }

                    return 0;
                }
            )
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    if (
                        action === '-' &&
                        nums[0] === '27176' &&
                        nums[1] === '340'
                    ) {
                        return 26836;
                    }

                    return 0;
                }
            );

        expect(parser.execute()).toBe(26836);
        spy.mockRestore();
    });

    test('Parser set "22644 + 4532 * 340" to call MakeAction.execute', () => {
        const parser = new Parser('22644 + 4532 * 340');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    if (
                        action === '*' &&
                        nums[0] === '4532' &&
                        nums[1] === '340'
                    ) {
                        return 1540880;
                    }

                    return 0;
                }
            )
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    if (
                        action === '+' &&
                        nums[0] === '22644' &&
                        nums[1] === '1540880'
                    ) {
                        return 1563542;
                    }

                    return 0;
                }
            );

        expect(parser.execute()).toBe(1563542);
        spy.mockRestore();
    });

    test('Parser set "2 + 3 + 2 * 2 * 4 / 2" to call MakeAction.execute', () => {
        const parser = new Parser('2 + 3 + 2 * 2 * 4 / 2');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    if (action === '*' && nums[0] === '2' && nums[1] === '2') {
                        return 4;
                    }

                    return 0;
                }
            )
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    if (action === '*' && nums[0] === '4' && nums[1] === '4') {
                        return 16;
                    }

                    return 0;
                }
            )
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    if (action === '/' && nums[0] === '16' && nums[1] === '2') {
                        return 8;
                    }

                    return 0;
                }
            )
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    if (action === '+' && nums[0] === '2' && nums[1] === '3') {
                        return 5;
                    }

                    return 0;
                }
            )
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    if (action === '+' && nums[0] === '5' && nums[1] === '8') {
                        return 13;
                    }

                    return 0;
                }
            );

        expect(parser.execute()).toBe(13);
        spy.mockRestore();
    });
    test('Parser set wrong action "23+45+(343+434+(443-3)" to catch Error', () => {
        expect(() => {
            const parser = new Parser('23+45+(343+434+(443-3)');
            parser.execute();
        }).toThrow();
    });
    test('Parser set "2 + (3 + 4) + 1" to call MakeAction.execute', () => {
        const parser = new Parser('2 + (3 + 4) + 1');
        const spy = jest
            .spyOn(parser, 'callMakeAction')
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    console.log(action, nums);

                    if (action === '+' && nums[0] === '3' && nums[1] === '4') {
                        return 7;
                    }

                    return 0;
                }
            )
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    console.log(action, nums);

                    if (action === '+' && nums[0] === '2' && nums[1] === '7') {
                        return 9;
                    }

                    return 0;
                }
            )
            .mockImplementationOnce(
                (action: string, nums: Array<string>): number => {
                    console.log(action, nums);

                    if (action === '+' && nums[0] === '9' && nums[1] === '1') {
                        return 10;
                    }

                    return 0;
                }
            );

        expect(parser.execute()).toBe(10);
        spy.mockRestore();
    });
    // test('Parser set "22644 + (453 + 4532 * 340)" to call MakeAction.execute', () => {
    //     const parser = new Parser('22644 + (453 + 4532 * 340)');
    //     const spy = jest
    //         .spyOn(parser, 'callMakeAction')
    //         .mockImplementationOnce(
    //             (action: string, nums: Array<string>): number => {
    //                 console.log(action, nums);

    //                 if (
    //                     action === '*' &&
    //                     nums[0] === '4532' &&
    //                     nums[1] === '340'
    //                 ) {
    //                     return 1540880;
    //                 }

    //                 return 0;
    //             }
    //         )
    //         .mockImplementationOnce(
    //             (action: string, nums: Array<string>): number => {
    //                 console.log(action, nums);

    //                 if (
    //                     action === '+' &&
    //                     nums[0] === '453' &&
    //                     nums[1] === '1540880'
    //                 ) {
    //                     return 1541333;
    //                 }

    //                 return 0;
    //             }
    //         )
    //         .mockImplementationOnce(
    //             (action: string, nums: Array<string>): number => {
    //                 console.log(action, nums);

    //                 if (
    //                     action === '+' &&
    //                     nums[0] === '22644' &&
    //                     nums[1] === '1541333'
    //                 ) {
    //                     return 1563977;
    //                 }

    //                 return 0;
    //             }
    //         );

    //     expect(parser.execute()).toBe(1563977);
    //     spy.mockRestore();
    // });
    // test('Parser set "3 + (5 * 3 + (4+5) * 2)" to call MakeAction.execute', () => {
    //     const parser = new Parser('3 + (5 * 3 + (4+5) * 2)');
    //     const spy = jest
    //         .spyOn(parser, 'callMakeAction')
    //         .mockImplementationOnce(
    //             (action: string, nums: Array<string>): number => {
    //                 console.log(action, nums);

    //                 if (action === '+' && nums[0] === '4' && nums[1] === '5') {
    //                     return 9;
    //                 }

    //                 return 0;
    //             }
    //         )
    //         .mockImplementationOnce(
    //             (action: string, nums: Array<string>): number => {
    //                 console.log(action, nums);

    //                 if (action === '*' && nums[0] === '5' && nums[1] === '3') {
    //                     return 15;
    //                 }

    //                 return 0;
    //             }
    //         )
    //         .mockImplementationOnce(
    //             (action: string, nums: Array<string>): number => {
    //                 console.log(action, nums);

    //                 if (action === '*' && nums[0] === '9' && nums[1] === '2') {
    //                     return 18;
    //                 }

    //                 return 0;
    //             }
    //         )
    //         .mockImplementationOnce(
    //             (action: string, nums: Array<string>): number => {
    //                 console.log(action, nums);

    //                 if (
    //                     action === '+' &&
    //                     nums[0] === '15' &&
    //                     nums[1] === '18'
    //                 ) {
    //                     return 32;
    //                 }

    //                 return 0;
    //             }
    //         )
    //         .mockImplementationOnce(
    //             (action: string, nums: Array<string>): number => {
    //                 console.log(action, nums);

    //                 if (action === '+' && nums[0] === '3' && nums[1] === '32') {
    //                     return 35;
    //                 }

    //                 return 0;
    //             }
    //         );

    //     expect(parser.execute()).toBe(35);
    //     spy.mockRestore();
    // });
});
