'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the buildString function below.
 */
function maxSub(s, r, m) {
    let i = m;
    while (i <= r.length) {
        if (s.indexOf(r.substr(0, i)) == -1)
            return i - 1;
        i++;
    }
    return i - 1;
}
function buildString(a, b, s) {
    /*
     * Write your code here.
     */
    let cost = [],
        s1 = s.split(''),
        state = [],
        max = 0;
    cost[s.length - 1] = 0;
    s1.map((x, i) => {
        let sub = s.substr(0, i + 1),
            rem = s.substr(i + 1);
        max = maxSub(sub, rem, max);
        state[i] = max;

})
for (let i = s.length - 2; i >= 0; i--) {
    let min = a + cost[i + 1];
    for (let j = 1; j <= state[i]; j++) {
        let c = b + cost[i + j];
        min = Math.min(min, c);
    }
    cost[i] = min;
}
return cost[0] + a;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nab = readLine().split(' ');

        const n = parseInt(nab[0], 10);

        const a = parseInt(nab[1], 10);

        const b = parseInt(nab[2], 10);

        const s = readLine();

        let result = buildString(a, b, s);

        ws.write(result + "\n");
    }

    ws.end();
}