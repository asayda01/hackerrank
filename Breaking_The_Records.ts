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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores: number[]): number[] {
    let min:number = scores[0];
    let max:number = scores[0];
    let minCounter:number = 0;
    let maxCounter:number = 0;
    scores.forEach(value=>{
        if(min>value){
            minCounter++;
            min = value;
        }
        if(max<value){
            maxCounter++;
            max = value;
        }
    })
    return [maxCounter,minCounter]
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const scores: number[] = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result: number[] = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
