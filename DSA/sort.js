// ------------------------------------------------------------------
// selection sort：在原有的陣列中進行降冪
const selectionSort = (arr1)=>{
    for (var i = 0; i < arr1.length; i++) {
        var min = i // 最左邊是放置排序好的最小數字
        for (var j = i+1; j < arr1.length; j++) { // 歷遍尚未排序過的數字
            if (arr1[j] < arr1[min]) { // 判斷左邊是否比右邊大
                min = j // 左邊較大就要與右邊交換, 將min的index換成右邊的
            }
        }
        if (min != i){ // 不同表示左邊數字（index i）比右邊（index min）大, 故要交換
            var tmp = arr1[min]
            arr1[min] = arr1[i]
            arr1[i] = tmp
        }
        console.log(arr1)
    }
}

const arr1 = [6, 26, 9, 13, 7, 5]
selectionSort(arr1)

// ------------------------------------------------------------------
// bubble sort：在同一個陣列中，兩兩數字相比，進行排序
const bubbleSort = (arr2)=>{
    var flag = 0 // 判斷是否有數字交換位置
    while (flag === 0) {
        flag = 1 // 假設沒有交換位置
        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i] > arr2[i+1]) {
                let tmp = arr2[i]
                arr2[i] = arr2[i+1]
                arr2[i+1] = tmp
                flag = 0 // 有交換位置，所以改回0
            }
        }
    }
}

const arr2 = [6, 26, 9, 13, 7, 5]
bubbleSort(arr2)
console.log(arr2)

// ------------------------------------------------------------------
// Insertion Sort：插入排序
const insertionSort = (arr3)=>{
  for (let i = 1; i < arr3.length; i++) {
    let tmp = arr3[i] // 暫存要insert的數字
    let j = i - 1 // 已排序陣列中,最後(右邊)一個數字的index
    while (tmp < arr3[j]) { // 已排序的陣列從右到左, 跟tmp數字比較
      arr3[j+1] = arr3[j] // 將被比較的數字往後移動一位
      j = j - 1
      if (j < 0) break
    }
    arr3[j+1] = tmp // 若進while: 將tmp放到被比較的數字位置上, 若無進while: 將tmp放到自己原本位置

    console.log(arr3)
  }
}

const arr3 = [6, 26, 9, 13, 7, 5]
insertionSort(arr3)