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
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr: number[]): number {
    let modus = -Infinity
    arr.forEach(num => {
          let x = 0
            for (const a of arr) {
                    if (num == a) {
                              x += 1
                                  }
  }
  if (x > modus) {
    modus = x
  }
})
    return arr.length - modus

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result: number = equalizeArray(arr);

    ws.write(result + '\n');

    ws.end();
}
