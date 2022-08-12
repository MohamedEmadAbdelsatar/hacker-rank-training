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
 * Complete the 'bomberMan' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY grid
 */

function bomberMan(n, grid) {
    let newGrid = [];
    for(let string of grid) {
        newGrid.push(string.split(''));
    }
    let previous = newGrid.map(function(arr){
        return arr.slice();
    });
    
    if(n < 2){
        n = 0;
    } else if(n%2 === 0){
        n = 2;
    } else if ((n+1)%4 === 0){
        n = 3;
    } else if ((n-1)%4 === 0){
        n = 5;
    }
    
    for(let i = 1;i <= n; i++) {
        if(i != 1) {
            if(i%2 == 0){
                for(let row = 0; row < newGrid.length; row++){
                    for(let column = 0; column < newGrid[0].length; column++){
                        if (newGrid[row][column] == '.') {
                            newGrid[row][column] = 'O';
                        }
                    }
                }
            } else {
                for(let row = 0; row < newGrid.length; row++){
                    for(let column = 0; column < newGrid[0].length; column++){
                        if (previous[row][column] === 'O') {
                            newGrid[row][column] = '.';
                            if (row - 1 >= 0) {
                                newGrid[row - 1][column] = '.';
                            }
                            
                            if (row + 1 <= newGrid.length - 1) {
                                newGrid[row + 1][column] = '.';
                            }
                            
                            if (column - 1 >= 0) {
                                newGrid[row][column - 1] = '.';
                            }
                            if (column + 1 <= newGrid[0].length - 1) {
                                newGrid[row][column + 1] = '.';
                            }
                        }
                    }
                }
                previous = newGrid.map(function(arr){
                    return arr.slice();
                });
            }
        }
    }
    
    let result = [];
    for (let row of newGrid) {
        result.push(row.join(''));
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const r = parseInt(firstMultipleInput[0], 10);

    const c = parseInt(firstMultipleInput[1], 10);

    const n = parseInt(firstMultipleInput[2], 10);

    let grid = [];

    for (let i = 0; i < r; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    const result = bomberMan(n, grid);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
