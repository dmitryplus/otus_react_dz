export const div = function (a: number, b: number): number {
    if (b === 0) {
        throw new Error('Division by zero');
    }

    return a / b;
};