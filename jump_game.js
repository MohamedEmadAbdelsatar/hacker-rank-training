function jump(input)
{
    let i = 0;
    for (let reach = 0; i < input.length && i <= reach; ++i) {
        reach = Math.max(i + input[i], reach);
    }

    return i == input.length;
}

console.log(jump([3,2,1,0,4]));