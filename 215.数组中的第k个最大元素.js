/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // return nums.sort((a, b) => b - a)[k - 1]
  const quickSort = (arr) => {
    if (!arr.length) return []
    const pivotIndex = arr.length >> 1
    const pivot = arr[pivotIndex]
    const left = []
    const right = []
    for (let i = 0; i < arr.length; i++) {
      if (i !== pivotIndex) {
        if (arr[i] >= pivot) {
          left.push(arr[i])
        } else {
          right.push(arr[i])
        }
      }
    }
    return quickSort(left).concat(pivot, quickSort(right))
  }
  return quickSort(nums)[k - 1]
};
// @lc code=end

