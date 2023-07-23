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
 * Complete the 'insertionSort' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const getSum =
  (BITree, index) => { 
    let sum = 0
  
    // Find sum of all ancestors of the current node
    while (index > 0) { 
      sum += BITree[index]        // Increment sum by current node value
      index -= index & (-index)   // Get index of ancestor node
    } 

    return sum
  } 

// Updates a node in the Binary Index Tree at a given index
// Argument 'val' is added to BITree[index] and all of its successors
const updateBIT =
  (BITree, index, n, val) => { 
    // Update all successors of BITree[index]
    while (index <= n) { 
      BITree[index] += val       // Add 'val' to current node of BI Tree 
      index += index & (-index)  // Get index of successor node
    }

    return BITree
  } 

const getInvCount =
  arr =>
    (maxEl => 
      // Traverse all the array elements from right to left
      arr.reduceRight(
        (accObj, el) => ({
          count : accObj.count + getSum(accObj.BIT, el - 1)
          , BIT : updateBIT(accObj.BIT, el, maxEl, 1)
        })
        // Use an accumulator object that holds both the inversion
        // count and the Binary Index Tree with maxEl+1 elements, all
        // initialised to zero
      , {count : 0, BIT : Array(maxEl+1).fill(0)}
      // Return how many inversion were needed
      ).count
    )
    // Find the maximum element in the array and pass value this as an
    // argument to the anonymous function above
    (arr.reduce((maxVal, el) => el > maxVal ? el : maxVal, -Number.MAX_SAFE_INTEGER))

// Complete the insertionSort function below.
function insertionSort(arr) {
  return getInvCount(arr)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = insertionSort(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
