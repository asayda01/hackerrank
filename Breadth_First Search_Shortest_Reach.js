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
 * Complete the 'bfs' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. 2D_INTEGER_ARRAY edges
 *  4. INTEGER s
 */

function bfs(n, m, edges, s) {
        let graph = {}
    // fill the graph with empty sets (equivalent to Python's defaultdict(set))
    Array(n+1).fill(null).forEach((v, i) => graph[i] = new Set())
    
    let result = []
    
    // Construct graph double linked (undirected)
    for (let [n1, n2] of edges) {
        graph[n1].add(n2)
        graph[n2].add(n1)
    }
    
    // For node i = 1...n calculate distance from the start node to 'i'
    for (let i = 1; i <= n; i++) {
        if (i == s) continue // skip start node in the result array
        
        let queue = []
        // We use distances array also as visited array
        let distances = Array(n+1).fill(null).map(_ => -1) // start distance as -1 for all
        distances[s] = 0 // starting node has distance of 0
        queue.push(s)
        
        // BFS LOOP ----------------------------
        while (queue.length > 0) {
            let node = queue.shift()
            for (let neighbor of graph[node]) {
                if (distances[neighbor] === -1) {
                    queue.push(neighbor)
                    // each distance is 6 more than the previous node
                    distances[neighbor] = distances[node] + 6
                    if (neighbor === i) { // if the target node i is reached
                        queue = [] // set the queue to empty to break the outer loop
                        break // no need to continue inner loop either
                    }
                }
            }
        }
        result.push(distances[i] || -1)
    }
    return result
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const m = parseInt(firstMultipleInput[1], 10);

        let edges = Array(m);

        for (let i = 0; i < m; i++) {
            edges[i] = readLine().replace(/\s+$/g, '').split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const s = parseInt(readLine().trim(), 10);

        const result = bfs(n, m, edges, s);

        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}
