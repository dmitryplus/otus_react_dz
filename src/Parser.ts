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

        if ((workString.match(this.validActionsGlobal) ?? []).length > 1) {
            ['*', '/', '-', '+'].forEach((action) => {
                if (workString.indexOf(action) !== -1) {
                    const actionPosition = workString.lastIndexOf(action);

                    const leftPart = workString.slice(0, actionPosition);

                    const rightPart = workString.slice(
                        actionPosition + 1,
                        workString.length
                    );

                    workString =
                        this.execute(leftPart) + '' + action + '' + rightPart;
                }
            });
        }

        const result: RegExpMatchArray | null = workString.match(
            this.validActions
        );

        if (result === null || typeof result.index === 'undefined') {
            throw new Error('Parser error');
        }

        const action: string = workString.slice(result.index, result.index + 1);

        return this.callMakeAction(action, workString.split(this.validActions));
    };

    callMakeAction = (action: string, nums: Array<string>): number => {
        const makeAction: MakeAction = new MakeAction();
        return makeAction.execute(action, nums);
    };
}
