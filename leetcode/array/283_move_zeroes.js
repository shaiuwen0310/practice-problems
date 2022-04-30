/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 const moveZeroes = (nums) => {
  let index = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      if (nums[index] === 0) {
        nums[index] = nums[i]
        nums[i] = 0
      }
      index++
    }
  }
  return nums
};

let nums = [0, 1, 0, 0, 2, 0, 6, 0, 8]
console.log(moveZeroes(nums))