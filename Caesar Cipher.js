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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    let result = '';
    const n = k % 26;
    
    for(let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
            let newValue = s.charCodeAt(i) + n;
            if(newValue <= 122) {
                result += String.fromCharCode(newValue);
            } else {
                result += String.fromCharCode(newValue - 26);
            }
        } else if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            let newValue = s.charCodeAt(i) + n;
            if(newValue <= 90) {
                result += String.fromCharCode(newValue);
            } else {
                result += String.fromCharCode(newValue - 26);
            }
        } else {
            result += s[i];
        }
    }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
