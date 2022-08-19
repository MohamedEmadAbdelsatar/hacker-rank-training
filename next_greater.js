function nextGreaterElement(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        let pos = nums2.findIndex(element => element == nums1[i]);
        let found = -1;
        for(let j = pos; j < nums2.length; j++) {
            if(nums2[j] > nums1[i]) {
                found = nums2[j];
                break;
            }
        }
        result.push(found);
    }
    return result;
};

console.log(nextGreaterElement([2,4],[1,2,3,4]));