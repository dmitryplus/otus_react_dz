import { Parser } from './Parser';
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = (): Promise<void> =>
    new Promise((resolve) => {
        rl.question('> ', (answer: string) => {
            const parser = new Parser(answer);

            const result = parser.execute();

            if (result) {
                console.log(`Result: ${result}`);
            }

            resolve();
        });
    });

async function app(): Promise<null> {
    while (true) {
        await question();
    }
}

app();
