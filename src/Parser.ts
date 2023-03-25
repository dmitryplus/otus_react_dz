import { MakeAction } from './MakeAction';

export class Parser {
    originalString: string;

    validActions: RegExp = /[\+\-\*\/]/;
    validActionsGlobal: RegExp = /[\+\-\*\/]/g;

    constructor(originalString: string) {
        originalString = originalString.replace(/\s/g, '');

        if (originalString.length === 0 || originalString.match(/[a-z]/i)) {
            throw new Error('String not supported');
        }

        if (
            !originalString.match(this.validActions) ||
            !originalString.match(/[\d]/i)
        ) {
            throw new Error('String not supported');
        }

        this.originalString = originalString;
    }

    execute = (dataString: string = ''): number => {
        let workString: string = dataString;
        if (workString === '') {
            workString = this.originalString;
        }

        console.log('execute - ', workString);

        if ((workString.match(this.validActionsGlobal) ?? []).length > 1) {
            workString.split('').forEach((value, index) => {
                //console.log(value, ' | ', index);

                if (['+', '-'].includes(value)) {
                    const action = value;

                    const actionPosition = workString.indexOf(action);

                    const leftArray = workString
                        .slice(0, actionPosition)
                        .split('');

                    //console.log(leftArray);

                    let leftPos = 0;
                    let leftPart = leftArray.join('');
                    let leftArgument = leftPart;

                    for (let i = leftArray.length - 1; i >= 0; i--) {
                        if (['*', '/', '-', '+'].indexOf(leftArray[i]) >= 0) {
                            leftPos = i;
                            break;
                        }
                    }

                    if (leftPos !== 0) {
                        leftPart = workString.slice(0, leftPos + 1);

                        leftArgument = workString.slice(
                            leftPos + 1,
                            actionPosition
                        );
                    }

                    const rightArray = workString
                        .slice(actionPosition + 1, workString.length)
                        .split('');

                    let rightPos = 0;

                    for (let i = 0; i < rightArray.length; i++) {
                        if (['*', '/', '-', '+'].indexOf(rightArray[i]) >= 0) {
                            rightPos = i;
                            break;
                        }
                    }

                    const rightPart = workString.slice(
                        actionPosition + 1 + rightPos,
                        workString.length
                    );

                    const rightArgument = workString.slice(
                        actionPosition + 1,
                        actionPosition + 1 + rightPos
                    );

                    console.log(
                        leftPos,
                        ' - ',
                        leftPart,
                        ' | ',
                        leftArgument,
                        ' | ',
                        action,
                        ' | ',
                        rightArgument,
                        ' | ',
                        rightPart
                    );

                    const result = this.execute(
                        [
                            leftPos === 0 ? leftPart : leftArgument,
                            action,
                            rightPos === 0 ? rightPart : rightArgument,
                        ].join('')
                    );

                    // console.log('result', result);

                    workString = [
                        leftPos === 0 ? '' : leftPart,
                        result,
                        rightPos === 0 ? '' : rightPart,
                    ].join('');
                }
            });
        }

        // console.log(workString);

        if ((workString.match(this.validActionsGlobal) ?? []).length === 1) {
            const result: RegExpMatchArray | null = workString.match(
                this.validActions
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
                workString.split(this.validActions)
            );
        }

        return +workString;
    };

    callMakeAction = (action: string, nums: Array<string>): number => {
        const makeAction: MakeAction = new MakeAction();
        return makeAction.execute(action, nums);
    };
}
