'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    
    a.sort ( (a, b) => {return a-b} );
    
    let score = 0;
    let strike = 0;
    
    for (let i = 0; i < a.length; i++) {
        
        for (let j = 0; j < a.length; j++) {
            if ( a[j] - a[i] <= 1 && a[j] - a[i] >= 0) {
                strike++;
                if (strike > score) {
                    score = strike;
                }
            } else {
                strike = 0;
            }
        }
        strike = 0;
    }
    return(score);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
