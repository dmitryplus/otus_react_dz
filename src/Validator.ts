export class Validator {
    wrongSymbolsRegExp = /[!@#$%^&_=\[\]{};':"\\|,.<>?]+/;

    actions: RegExp = /[\+\-\*\/]/;
    actionsGlobal: RegExp = /[\+\-\*\/]/g;

    execute = (workString: string): boolean => {
        if (workString.length === 0 || workString.match(/[a-z]/i)) {
            return false;
        }

        if (!workString.match(this.actions) || !workString.match(/[\d]/i)) {
            return false;
        }

        if (this.wrongSymbolsRegExp.test(workString)) {
            return false;
        }

        return true;
    };
}
