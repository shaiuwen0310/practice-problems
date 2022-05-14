/**
 * @param {number[]} nums
 * @return {number}
 */

 let findShortestSubArray = function(nums) {
    let count = [];
    for (let i=0; i<nums.length; i++) {
        if (!count[nums[i]]) {
            count[nums[i]] = 1;
        }
        else {
            count[nums[i]]++;
        }
    }
    console.log(`count index: ${count}`) // [ <1 empty item>, 2, 3, 1, 1 ]

    let degree = 0;
    for (let j=0; j<count.length; j++) {
        if (degree < count[j]) {
            degree = count[j];
        }
    }
    console.log(`degree: ${degree}`) // 3

    let arr = [];
    for (let i=0; i<count.length; i++) {
        if (degree === count[i]) {
            arr.push(i);
        }
    }
    console.log(`number of biggest degree: ${arr}`) // degree最大的數字 [2]

    let index = [],
        min = nums.length;
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<nums.length; j++) {
            if (arr[i] === nums[j]) {
                index.push(j);
            }
        }
        console.log(`index: ${index}`)

        min = Math.min(min,index[degree-1]-index[0]+1);
        index = [];
    }
    return min;
};

let nums = [1,2,2,3,1,4,2]
console.log(findShortestSubArray(nums))
