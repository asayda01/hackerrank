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
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */

function libraryFine(d1: number, m1: number, y1: number, d2: number, m2: number, y2: number): number {
    if (y1 > y2) {
        return 10000
    } else if (m1 > m2 && y1 >= y2) {
        return 500 * (m1 - m2)
    } else if (d1 > d2 && m1 >= m2 && y1 >= y2) {
        return 15 * (d1 - d2)
    } else {
        return 0
    }

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const d1: number = parseInt(firstMultipleInput[0], 10);

    const m1: number = parseInt(firstMultipleInput[1], 10);

    const y1: number = parseInt(firstMultipleInput[2], 10);

    const secondMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const d2: number = parseInt(secondMultipleInput[0], 10);

    const m2: number = parseInt(secondMultipleInput[1], 10);

    const y2: number = parseInt(secondMultipleInput[2], 10);

    const result: number = libraryFine(d1, m1, y1, d2, m2, y2);

    ws.write(result + '\n');

    ws.end();
}
