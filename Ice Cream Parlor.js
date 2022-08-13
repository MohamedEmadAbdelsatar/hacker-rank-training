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
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER_ARRAY arr
 */

function icecreamParlor(m, arr) {
    let first = 0;
    let second = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == m) {
                first = i;
                second = j;
                break;
            }
        }
    }
    
    return [first + 1, second + 1];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const m = parseInt(readLine().trim(), 10);

        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = icecreamParlor(m, arr);

        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}
