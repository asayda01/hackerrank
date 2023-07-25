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
 * Complete the 'morganAndString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function morganAndString(a, b) {
  a = a.split("");
  b = b.split("");

  const aLen = a.length;
  const bLen = b.length;

  let i = 0;
  let j = 0;
  let output = "";

  // Checks the next steps and returns how much should be cut from the winner array
  // Also stops counting if there are matches but they arn't equal to the initial character .
  function tie(_i, _j, char) {
    let result = "a";
    let loops = 0;
    let allEqual = true;
    while (true) {
      _i++;
      _j++;
      if (allEqual) loops++;

      if (_i > aLen) {
        result = "b";
        break;
      }
      if (_j > bLen) {
        result = "a";
        break;
      }
      const _a = a[_i];
      const _b = b[_j];
      if (_a < _b) {
        result = "a";
        break;
      }
      if (_a > _b) {
        result = "b";
        break;
      }
      if (_a !== char) allEqual = false;
    }

    return { win: result, length: loops };
  }

  //
  while (true) {
    if (i >= aLen && j >= bLen) break;

    const _a = a[i];
    const _b = b[j];

    if (_a === _b) {
      const res = tie(i, j, _a);

      if (res.win === "a") {
        output += a.slice(i, i + res.length).join("");
        i += res.length;
      } else {
        output += b.slice(j, j + res.length).join("");
        j += res.length;
      }
    } else if (_a < _b || !_b) {
      if (_a) {
        output += _a;
      }
      i++;
    } else if (_a > _b || !_a) {
      if (_b) {
        output += _b;
      }
      j++;
    }
  }

  return output;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const a = readLine();

        const b = readLine();

        const result = morganAndString(a, b);

        ws.write(result + '\n');
    }

    ws.end();
}
