function nestedIntegers(depth = 1, input) 
{
    let sum = 0;
    for(let i = 0; i < input.length; i++) {
        if(Number.isInteger(input[i])) {
            sum += depth * input[i];
        } else {
            sum += nestedIntegers(depth + 1, input[i]);
        }
    }
    return sum;
}

console.log(nestedIntegers(1, [1,[4,[6]]]));