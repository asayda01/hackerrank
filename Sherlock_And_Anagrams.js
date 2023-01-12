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
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s) {
    let count = 0;
    let subStrings = [];
    for (let i = 0; i < s.length; i++) {
        for (let k = i + 1; k < s.length + 1; k++) {
            let subString = s.slice(i, k);
            subString = subString
                .split("")
                .sort((a, b) => a.localeCompare(b))
                .join("");
            subStrings.push(subString);
        }
    }
    for (let i = 0; i < subStrings.length; i++) {
        for (let k = i + 1; k < subStrings.length; k++) {
            let str1 = subStrings[i];
            let str2 = subStrings[k];
            if (str1 === str2) {
                count++;
            }
        }
    }
    return count;
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = sherlockAndAnagrams(s);

        ws.write(result + '\n');
    }

    ws.end();
}
