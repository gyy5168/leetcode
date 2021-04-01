/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
  const res = []

  const reverse = (end) => {
    let start = 0

    while(start < end) {
      let temp = arr[start]

      arr[start] = arr[end]
      arr[end] = temp
      start++
      end--
    }
  }
  const sort = (n) => {
    if (n === 1) return
    
    let maxIndex = 0
    let max = arr[0]
    for (let i = 1; i < n; i++) {
      if (arr[i] > max) {
        max = arr[i]
        maxIndex = i
      }
    }

    if (maxIndex !== n - 1) {
      reverse(maxIndex)

      reverse(n - 1)

      res.push(maxIndex + 1)

      res.push(n)
    }

    sort(n - 1)
  }

  sort(arr.length)
  return res
};
// @lc code=end

