/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  // let i = 0
  // while (i < nums.length) {
  //   let left = i > 0 ? nums[i - 1] : -Infinity
  //   let right = i < nums.length - 1 ? nums[i + 1] : -Infinity
  //   if (left < nums[i] && nums[i] > right) return i
  //   i++
  // }
  // return -1
  // let i = 0
  // while (i < nums.length - 1) {
  //   if (nums[i] > nums[i + 1]) return i
  //   i++
  // }
  // return nums.length - 1
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = left + right >> 1
    if (nums[mid] > nums[mid + 1]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
};
// @lc code=end

