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
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h: number[], word: string): number {
    
    let maxHigh : number = 0;
    let alphabet : string[] = "abcdefghijklmnopqrstuvwxyz".split("");
    
    for (let i : number = 0; i < word.length; i++) {
        let letterIndex : number = alphabet.indexOf(word[i]);
    
    if (h[letterIndex] > maxHigh) {
        maxHigh = h[letterIndex];
        }
    };
    
    return maxHigh * word.length;

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const h: number[] = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const word: string = readLine();

    const result: number = designerPdfViewer(h, word);

    ws.write(result + '\n');

    ws.end();
}
