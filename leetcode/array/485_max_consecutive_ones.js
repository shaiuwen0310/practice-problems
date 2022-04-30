/**
 * @param {number[]} nums
 * @return {number}
 */
/*
var findMaxConsecutiveOnes = (nums) => {
  let setArr = [], count = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++
    } else if (nums[i] === 0) {
      setArr.push(count)
      count = 0
    }
  }
  setArr.push(count)
  // setArr.sort() // 錯誤 數字無法正常排序
  setArr.sort((a, b)=>{ return a-b })
  return setArr[setArr.length-1]
};
*/

var findMaxConsecutiveOnes = (nums) => {
    let resNum = 0, count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
          count++
          resNum = Math.max(resNum, count)
        } else {
          count = 0
        }
    }
    return resNum
  };
  
  
  let nums = [1,0,1,1,0,1]
  console.log(findMaxConsecutiveOnes(nums))
  
  