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
 * Complete the 'stones' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER a
 *  3. INTEGER b
 */

function stones(n, a, b) {
    let arr = [];
    for (let i = 0; i <= n-1; i++){
        arr.push(i * a + (n - 1 - i) * b);
    }
    let unique = [];
    arr.forEach(x => unique.filter(y => x == y).length > 0 ? '' : unique.push(x)); 
    return unique.sort((x, y) => x - y);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);

        const a = parseInt(readLine().trim(), 10);

        const b = parseInt(readLine().trim(), 10);

        const result = stones(n, a, b);

        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}
