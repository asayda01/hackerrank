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
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
  let result=BigInt(1);
  for(let i=BigInt(`${n}`); i>1; i--)
    {
      result=result*i;
    }
  console.log(result.toString().replace('n',"")) ;
};

function main() {
    const n = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
}
