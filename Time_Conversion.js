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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const am = s.includes("AM"); //boolean
    const t24 = s.slice(0, -2);
    return am && t24.slice(0, 2) === "12"
        ? t24.replace("12", "00")
        : am
        ? t24
        : t24.replace(
            t24.slice(0, 2),
            (parseInt(t24.slice(0, 2))%12 + 12).toString()
        );
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
