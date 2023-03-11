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
        let workStringPart: string = dataString;
        if (workStringPart === '') {
            workStringPart = this.originalString;
        }

        if (
            (workStringPart.match(this.validActionsGlobal) ?? []).length > 1
        ) {
            const leftPart = workStringPart.slice(
                0,
                workStringPart.indexOf('+')
            );

            const newString = workStringPart.slice(
                workStringPart.indexOf('+') + 1
            );

            console.log(this.originalString);
            console.log(newString);

            const result = this.execute(newString);

            console.log('result - ' + result);

            return this.execute(leftPart + '+' + result);
        }

        if (
            (workStringPart.match(this.validActionsGlobal) ?? []).length === 1
        ) {
            const result: RegExpMatchArray | null = workStringPart.match(
                this.validActions
            );

            if (result === null || typeof result.index === 'undefined') {
                throw new Error('Parser error');
            }

            const action: string = workStringPart.slice(
                result.index,
                result.index + 1
            );

            return this.callMakeAction(
                action,
                workStringPart.split(this.validActions)
            );
        }

        return 10;
    };

    callMakeAction = (action: string, nums: Array<string>): number => {
        const makeAction: MakeAction = new MakeAction();
        return makeAction.execute(action, nums);
    };
}
