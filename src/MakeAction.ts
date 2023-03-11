import { mult } from './MathOperators/Multiplication';
import { div } from './MathOperators/Division';
import { add } from './MathOperators/Addition';
import { sub } from './MathOperators/Subtraction';

export class MakeAction {
    execute = (action: string, nums: Array<string>): number => {
        const params = nums.map((x) => +x);

        if (params.length !== 2) {
            throw new Error('Invalid number of parameters');
        }

        switch (action) {
            case '+':
                return this.getAddition(params[0], params[1]);
            case '-':
                return this.getSubtraction(params[0], params[1]);
            case '/':
                return this.getDivision(params[0], params[1]);
            case '*':
                return this.getMultiplication(params[0], params[1]);
            default:
                throw new Error('Mathematical action not supported');
        }
    };

    getMultiplication = function (a: number, b: number): number {
        return mult(a, b);
    };
    getDivision = function (a: number, b: number): number {
        return div(a, b);
    };
    getAddition = function (a: number, b: number): number {
        return add(a, b);
    };
    getSubtraction = function (a: number, b: number): number {
        return sub(a, b);
    };
}
