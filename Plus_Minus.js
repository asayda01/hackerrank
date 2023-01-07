'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const findCount = condition =>
    arr.reduce((pv, cv)=>(condition==="-"?cv<0:condition==="+"?cv>0:condition==="0"?cv===0:undefined)?pv+1:pv,0);
  const log = d => console.log((d / arr.length).toPrecision(6));
  log(findCount("+"));
  log(findCount("-"));
  log(findCount("0"));
}


function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
