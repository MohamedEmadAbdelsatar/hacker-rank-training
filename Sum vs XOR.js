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
 * Complete the 'sumXor' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function sumXor(n) {
    if(n == 0) {
        return 1;
    }
    
    let result = 0;
    let bitString = n.toString(2);
    
    for(let i = 0; i < bitString.length; i++) {
        if(bitString[i] === '0') {
            result++;
        } 
    }
    return Math.pow(2, result);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = sumXor(n);

    ws.write(result + '\n');

    ws.end();
}
   
