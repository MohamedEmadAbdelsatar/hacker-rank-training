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
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(scores, alice) {
  let result = [];
  let uniqueScores = [...new Set(scores)];
  
  for (const score of alice) {
    if (score >= uniqueScores[0]) {
      result.push(1);
    } else if (score < uniqueScores[uniqueScores.length - 1]) {
      result.push(uniqueScores.length + 1);
    } else {
      result.push(rankBinarySearch(score, uniqueScores));
    }
  }
  return result;
}

function rankBinarySearch(score, uniqueScores) {
  let start = 0;
  let end = uniqueScores.length - 1;while (true) {
    let mid = Math.floor((start + end) / 2);// base cases
    if (uniqueScores[mid] === score) {
      return mid + 1;
    } else if (uniqueScores[mid] > score && uniqueScores[mid + 1] < score) {
      return mid + 2;
    } else if (uniqueScores[mid] < score && uniqueScores[mid - 1 > score]) {
      return mid - 1;
    }// recursion
    if (score < uniqueScores[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
