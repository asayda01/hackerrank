'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a: number, b: number): number {
    
    let new_A = Math.sqrt(a) % 1 === 0 ? a - 1: a;
    let new_B = Math.sqrt(b) % 1 === 0 ? b + 1: b;
    return (Math.floor(Math.sqrt(new_B)) - Math.floor(Math.sqrt(new_A)));

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const q: number = parseInt(readLine().trim(), 10);

    for (let qItr: number = 0; qItr < q; qItr++) {
        const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

        const a: number = parseInt(firstMultipleInput[0], 10);

        const b: number = parseInt(firstMultipleInput[1], 10);

        const result: number = squares(a, b);

        ws.write(result + '\n');
    }

    ws.end();
}
