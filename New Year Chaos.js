'use strict';

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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    let num = 0;
    let chaotic = false;
    
    for(let i=q.length-1; i>=0; i--) {
        if(q[i]-i>3) chaotic = true;
        for(let j=q[i]-2;j<i;j++){
            if(q[j]>q[i]) {
                num++;
            }
        }
    }
    if(chaotic){
        console.log("Too chaotic");
    } else {
        console.log(num);
    }
}

/*function minimumBribes(q) {
    for(let i = 0; i < q.length;i++) {
        if(parseInt(q[i]) - i >= 4 || i - parseInt(q[i]) >= 4) {
            return console.log('Too chaotic');
        }
    }
    
    let result = 0;
    let sorted = false;
    let current = 1;
    while(!sorted) {
        if(q.indexOf(current) != current - 1) {
            let index = q.indexOf(current);
            q[index] = q[index - 1];
            q[index - 1] = current;
            result++;
            if(current == q[q.length - 1]){
                sorted = true;
            }
            
            if(q.indexOf(current) == current - 1){
                current++;
            }
        } else {
            if(current == q[q.length - 1]){
                sorted = true;
            }
            current++;
        }
    }
    
    return console.log(result);
}*/

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
