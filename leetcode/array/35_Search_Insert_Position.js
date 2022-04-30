/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let index = 0
    
    for(let i=0; i<nums.length; i++){
      if (target < nums[i] || target === nums[i]) {
        index = i
        break
      }
      if (target > nums[nums.length-1]) {
        index = (nums.length-1)+1
        break
      }
      if (target > nums[i] && target < nums[i+1]){
        index =  i + 1
        break
      }
    }
  
    return index
  };

let nums = [1,3,5,6]
let target = 7
console.log(searchInsert(nums, target))