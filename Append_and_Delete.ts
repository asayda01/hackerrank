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
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

let currentIndex:number = 0
function appendAndDelete(s: string, t: string, k: number): string {
    // Write your code here
    let minimumOpration:number = s.length + t.length,
    minLengthOfString:number = s.length <= t.length ? s.length : t.length
    if(minimumOpration <= k){
        return "Yes"
    }
    if(s[currentIndex] != t[currentIndex]){
        minimumOpration = s.slice(currentIndex).length + t.slice(currentIndex).length
        if(minimumOpration > k){
            return "No"
        }else if(minimumOpration == k){
            return "Yes"
        }else{
            minimumOpration = k - minimumOpration 
            if(minimumOpration % 2 == 0){
                return "Yes"
            }else{
                return "No"
            }
        }
    }else if(currentIndex >= minLengthOfString){
        if(k%2 == 0){
            return "Yes"
        }else{
            return "No"
        }
    }
    currentIndex++
    return appendAndDelete(s,t,k)

}



function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const t: string = readLine();

    const k: number = parseInt(readLine().trim(), 10);

    const result: string = appendAndDelete(s, t, k);

    ws.write(result + '\n');

    ws.end();
}
