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
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    if (s.length % 2 == 1) {
        return 'NO';
    }
    
    let opening = [];
    
    for(let i = 0; i < s.length; i++) {
        if (i == 0 && (s[i] == '}' || s[i] == ')' || s[i] == ']')) {
            return 'NO';
        }
        
        if (i == s.length - 1 && (s[i] == '{' || s[i] == '(' || s[i] == '[')) {
            return 'NO';
        }
        
        if (s[i] == '{' || s[i] == '(' || s[i] == '[') {
            opening.push(s[i]);
        }
        
        if (s[i] == '}' || s[i] == ')' || s[i] == ']') {
            let lastOpen = opening.pop();
            if (s[i] == '}' && lastOpen != '{'){
                return 'NO';
            }
            
            if (s[i] == ')' && lastOpen != '('){
                return 'NO';
            }
            
            if (s[i] == ']' && lastOpen != '['){
                return 'NO';
            }
        }
    }
    
    if (opening.length > 0) {
        return 'NO';
    }
    
    return 'YES';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        const result = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}