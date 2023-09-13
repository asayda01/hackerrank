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
 * Complete the 'stones' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER a
 *  3. INTEGER b
 */

function stones(n: number, a: number, b: number): number[] {
    
    let res: number[] = []
    n = n-1;
    if(a === b) {
        res.push(a*n);
        return res;
    }
    else if (a>b) {
        const aux = a;
        a = b;
        b = aux;
    }
    for(let i =  0; i<=n ; i++) {
        res.push((n-i)*a + i*b);
    }
    return res;

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const T: number = parseInt(readLine().trim(), 10);

    for (let TItr: number = 0; TItr < T; TItr++) {
        const n: number = parseInt(readLine().trim(), 10);

        const a: number = parseInt(readLine().trim(), 10);

        const b: number = parseInt(readLine().trim(), 10);

        const result: number[] = stones(n, a, b);

        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}
