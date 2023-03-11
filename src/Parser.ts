import { MakeAction } from './MakeAction';

export class Parser {
    dataString: string;
    validActions: RegExp = /[\+\-\*\/]/;

    constructor(dataString: string) {
        dataString = dataString.replace(/\s/g, '');

        if (dataString.length === 0 || dataString.match(/[a-z]/i)) {
            throw new Error('String not supported');
        }

        if (
            !dataString.match(this.validActions) ||
            !dataString.match(/[\d]/i)
        ) {
            throw new Error('String not supported');
        }

        this.dataString = dataString;
    }

    execute = (): number => {
        if ((this.dataString.match(this.validActions) ?? []).length === 1) {
            const result: RegExpMatchArray | null = this.dataString.match(
                this.validActions
            );

            if (result === null || typeof result.index === 'undefined') {
                throw new Error('Parser error');
            }

            const action: string = this.dataString.slice(
                result.index,
                result.index + 1
            );

            return this.callMakeAction(
                action,
                this.dataString.split(this.validActions)
            );
        }

        return 1;
    };

    callMakeAction = (action: string, nums: Array<string>): number => {
        const makeAction: MakeAction = new MakeAction();
        return makeAction.execute(action, nums);
    };
}
