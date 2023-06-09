import { MakeAction } from './MakeAction';
import { Validator } from './Validator';

export class Parser {
    originalString: string;
    validator: Validator;

    constructor(originalString: string) {
        originalString = originalString.replace(/\s/g, '');

        this.validator = new Validator();

        if (!this.validator.execute(originalString)) {
            throw new Error('String not supported');
        }

        this.originalString = originalString;
    }

    execute = (dataString: string = ''): number => {
        let workString: string = dataString;
        if (workString === '') {
            workString = this.originalString;
        }

        if ((workString.match(this.validator.actionsGlobal) ?? []).length > 1) {
            workString = this.splitByBrackets(workString, '(');

            workString.split('').forEach((value: string) => {
                if (['*', '/'].includes(value)) {
                    workString = this.splitByActions(workString, value);
                }
            });
            workString.split('').forEach((value: string) => {
                if (['+', '-'].includes(value)) {
                    workString = this.splitByActions(workString, value);
                }
            });
        }

        if ((workString.match(this.validator.actionsGlobal) ?? []).length === 1) {
            const result: RegExpMatchArray | null = workString.match(
                this.validator.actions
            );

            if (result === null || typeof result.index === 'undefined') {
                throw new Error('Parser error');
            }

            const action: string = workString.slice(
                result.index,
                result.index + 1
            );

            return this.callMakeAction(
                action,
                workString.split(this.validator.actions)
            );
        }

        return +workString;
    };

    splitByActions = (workString: string, value: string): string => {
        const action: string = value;

        const actionPosition: number = workString.indexOf(action);

        const leftArray: Array<string> = workString
            .slice(0, actionPosition)
            .split('');

        let leftActionPos: number = 0;
        let leftPart: string = leftArray.join('');
        let leftArgument: string = leftPart;

        for (let i: number = leftArray.length - 1; i >= 0; i--) {
            if (['*', '/', '-', '+'].indexOf(leftArray[i]) >= 0) {
                leftActionPos = i;
                break;
            }
        }

        if (leftActionPos !== 0) {
            leftPart = workString.slice(0, leftActionPos + 1);

            leftArgument = workString.slice(leftActionPos + 1, actionPosition);
        }

        const rightArray: Array<string> = workString
            .slice(actionPosition + 1, workString.length)
            .split('');

        let rightActionPos: number = 0;

        for (let i: number = 0; i < rightArray.length; i++) {
            if (['*', '/', '-', '+'].indexOf(rightArray[i]) >= 0) {
                rightActionPos = i;
                break;
            }
        }

        const rightPart: string = workString.slice(
            actionPosition + 1 + rightActionPos,
            workString.length
        );

        const rightArgument: string = workString.slice(
            actionPosition + 1,
            actionPosition + 1 + rightActionPos
        );

        const result: number = this.execute(
            [
                leftActionPos === 0 ? leftPart : leftArgument,
                action,
                rightActionPos === 0 ? rightPart : rightArgument,
            ].join('')
        );

        return [
            leftActionPos === 0 ? '' : leftPart,
            result,
            rightActionPos === 0 ? '' : rightPart,
        ].join('');
    };

    splitByBrackets = (
        workString: string,
        startBracket: string = '('
    ): string => {
        const stopBracket: string = ')';

        const startBracketStack: Array<number> = this.#getSubstringPosions(
            workString,
            startBracket
        );

        const stopBracketStack: Array<number> = this.#getSubstringPosions(
            workString,
            stopBracket
        );

        if (startBracketStack.length !== stopBracketStack.length) {
            throw new Error('String not supported');
        }

        if (startBracketStack.length === 0) {
            return workString;
        }

        const startBracketPos: number = workString.indexOf(startBracket);

        let stopBracketPos: number = 0;

        workString.split('').forEach((value: string, index: number) => {
            if (index > startBracketPos) {
                if (value === stopBracket) {
                    startBracketStack.pop();
                }

                if (startBracketStack.length === 0 && stopBracketPos === 0) {
                    stopBracketPos = index;
                }
            }
        });

        const leftPart = workString.slice(0, startBracketPos);

        const result = this.execute(
            workString.slice(
                startBracketPos + startBracket.length,
                stopBracketPos
            )
        );

        const rightPart = workString.slice(
            stopBracketPos + 1,
            workString.length
        );

        return [leftPart, result, rightPart].join('');
    };

    callMakeAction = (action: string, nums: Array<string>): number => {
        const makeAction: MakeAction = new MakeAction();
        return makeAction.execute(action, nums);
    };

    #getSubstringPosions = (
        workString: string,
        substring: string
    ): Array<number> => {
        const substringPositionsStack: Array<number> = [];
        let lastIndex = -1;
        while (
            (lastIndex = workString.indexOf(substring, lastIndex + 1)) !== -1
        ) {
            substringPositionsStack.push(lastIndex);
        }

        return substringPositionsStack;
    };
}
