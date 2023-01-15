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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr: number[]): number {
    
    let max_count:number=0;
    let op:number=0;
    let data = arr.sort((a,b)=>a-b);
    for(let i:number=0;i<data.length;i++){
        let count:number=0;
        for(let j:number=i;j<data.length;j++){
            if(data[i]==data[j]){
                count++;
            }
        }
        if(count>max_count){
            max_count=count;
            op=data[i];
        }else if(count==max_count){
            op==data[i];
        }
    }
    return op  ;
};

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const arrCount: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result: number = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
