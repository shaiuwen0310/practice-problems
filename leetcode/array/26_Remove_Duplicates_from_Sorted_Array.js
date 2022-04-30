// 26. Remove Duplicates from Sorted Array
/**
 * @param {number[]} arr
 * @return {number}
 */
 var removeDuplicates = function(arr) {
    let index = 0
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        index = index + 1
        continue
      }
      if (arr[i] != arr[i-1]) {
        arr[index] = arr[i]
        index = index + 1
      }
    }
    console.log(arr)
    return index
  };
  
  var arr1 = [ 1, 2, 2, 2, 5, 7, 7, 7, 10 ]
  console.log(removeDuplicates(arr1))
  