'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
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

function bfs(n: number, m: number, edges: number[][], s: number): number[] {
    const edgeMap = Array.from({ length: n + 1 }, () => []);
    for (const [x, y] of edges) {
        edgeMap[x].push(y);
        edgeMap[y].push(x);
        }
    let current = new Set([s]);
    const dp = Array.from({ length: n + 1 }, () => -1);
    dp[s] = 0;
    while (current.size > 0) {
        const next = new Set<number>();
        for (const x of current) {
            for (const y of edgeMap[x]) {
                if(dp[y] === -1) {
                    dp[y] = dp[x] + 6;
                    next.add(y);
                }
            }
        }
        current = next;
    }
    dp.splice(s, 1);
    return dp.slice(1);
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const q: number = parseInt(readLine().trim(), 10);

    for (let qItr: number = 0; qItr < q; qItr++) {
        const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

        const n: number = parseInt(firstMultipleInput[0], 10);

        const m: number = parseInt(firstMultipleInput[1], 10);

        let edges: number[][] = Array(m);

        for (let i: number = 0; i < m; i++) {
            edges[i] = readLine().replace(/\s+$/g, '').split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const s: number = parseInt(readLine().trim(), 10);

        const result: number[] = bfs(n, m, edges, s);

        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}
