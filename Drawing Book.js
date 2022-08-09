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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    if (p == 1 || p == n || (p == n - 1 && n % 2 == 1)) {
        return 0;
    }
    
    let flips = 0;
    let page = 1;
    if (p > Math.floor(n / 2)) {
        if(n % 2 !== 0){
            page = n - 1;
        } else {
            page = n;
        }
        while(page > p){
            flips++;
            page -= 2;
        }
    } else {
        while (page < p) {
            flips++;
            page +=2;
        }
    }
    
    return flips;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}
