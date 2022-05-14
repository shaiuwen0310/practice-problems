/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let res = []
  let count = 0
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] == i) count++
    }
    if (count > 1) res[0] = i
    if (count === 0) res[1] = i
    count = 0
  }
  return res
};
  
  let nums = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]
  console.log(findErrorNums(nums))
  
  