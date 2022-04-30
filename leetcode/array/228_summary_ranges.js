// LeetCode: 228. Summary Ranges
/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    var start, end
    var res = []
    for (let i = 0; i < nums.length; i++) {
      start = nums[i]
      end = nums[i]
      while (nums[i]+1 === nums[i+1]) {
        end = nums[i+1]
        i++
      }
  
      if (start === end) {
        res.push(String(start))
      } else {
        res.push(start + "->" + end)
      }
    }
    return res
  };
  
  var nums = [0,1,2,4,5,7]
  console.log(summaryRanges(nums))
  