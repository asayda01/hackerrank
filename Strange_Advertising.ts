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
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n: number): number {
    let tot1 : number = 0;
    let temp : number = 5;
    
    for (let i:number = 0 ; i<n ; i++) {
        if (temp !== 0) {
            tot1 +=  Math.floor ( ( temp / 2 ) );
            temp  =  Math.floor ( ( temp / 2 ) ) * 3 ;
        };
    }
    return tot1;

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const result: number = viralAdvertising(n);

    ws.write(result + '\n');

    ws.end();
}
