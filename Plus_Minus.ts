'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    
    for (const value of arr) {
        if (value === 0) {
            zero++;
        } else if (value > 0) {
            positive++;
        } else {
            negative++;
        };
  };
  console.log((positive / arr.length).toFixed(5));
  console.log((negative / arr.length).toFixed(5));
  console.log((zero / arr.length).toFixed(5));
};

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
