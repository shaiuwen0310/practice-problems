/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let count = {}
  let odd = 0
  let sum = 0

  let chars = s.split('');
  for (const i in chars) {
    if (! count[chars[i]]) {
      count[chars[i]] = 1
    } else {
      count[chars[i]]++
    }
  }

  for (const i in count) {
    if (count[i]%2 === 0) {
      sum += count[i]
    } else {
      odd = 1
      sum += count[i]-1
    }
  }

  return sum+odd
};
  
let s = "aabbbccd"
console.log(longestPalindrome(s))
