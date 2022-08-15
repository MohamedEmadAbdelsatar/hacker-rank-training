function maxSubarray(arr) {
    let posSum = 0;
    let subArray = 0;
    let maxSubArray = 0;
    let allPositive = true;
    let allNegative = true;
    let largestNegative = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            allNegative = false;
            posSum += arr[i];
        }
        
        if (arr[i] < 0) {
            allPositive = false;
            if(!largestNegative) {
                largestNegative = arr[i];
            } else {
                largestNegative = arr[i] > largestNegative ? arr[i] : largestNegative; 
            }
        }
        
        subArray += arr[i];
        if (subArray < 0) {
            subArray = 0;
        }
        maxSubArray = Math.max(subArray, maxSubArray);
    }
    
    if (allPositive) {
        return [posSum, posSum];
    }
    
    if (allNegative) {
        return [largestNegative, largestNegative];
    }
    
    return [maxSubArray, posSum];
}
