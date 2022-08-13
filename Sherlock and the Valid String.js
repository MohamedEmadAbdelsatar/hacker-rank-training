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
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
    const f = {}
    for (const c of s)
        f[c] = f[c] ? f[c] + 1 : 1
    
    let x = Object.values(f).sort((a, b) => a - b)
    
    let max = x[x.length - 1]
    let max2nd = x[x.length - 2]
    let min = x[0]
    let min2nd = x[1]
    
    if (max === min) return 'YES'
    if (max === min + 1 && min === max2nd) return 'YES'
    if (min === 1 && max === min2nd) return 'YES'
    return 'NO'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = isValid(s);

    ws.write(result + '\n');

    ws.end();
}
