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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    
    const onlyHour: string = s.slice(0, s.length-2)
    const hourType: string = s.slice(s.length-2, s.length);
    const arrHour: string[] = onlyHour.split(':');
    let hour: number = Number(arrHour[0]);
    const min: string = arrHour[1];
    const seg: string = arrHour[2];

    if (hourType === 'PM') {
        if (hour === 12) {
            return `${hour}:${min}:${seg}`;
        }
        hour = hour + 12;
        return `${hour}:${min}:${seg}`;
    } else {
        if (hour === 12) {
            return `00:${min}:${seg}`;
        }
        if (hour < 10) {
            return `0${hour}:${min}:${seg}`;
        }
        return `${hour}:${min}:${seg}`;
    }
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
