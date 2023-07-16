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
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation(p: number[]): number[] {
    
    let y:any = [];
    
    p.forEach((item, i) => y[i] = p.indexOf(p.indexOf(i+1) + 1) + 1);
    
    return y;

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const p: number[] = readLine().replace(/\s+$/g, '').split(' ').map(pTemp => parseInt(pTemp, 10));

    const result: number[] = permutationEquation(p);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
