/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  if (nums.length === 1) return
  let left = 0
  let middle = 1
  let right = nums.length - 1
  let cache
  while (left < nums.length && left <= right) {
    if (nums[left] === 0) {
      left++
      if (left === middle) middle++
    } else if (nums[left] === 2) {
      if (left === right) {
        break
      } else {
        cache = nums[right]
        nums[right] = nums[left]
        nums[left] = cache
        right--
      }
    } else {
      if (middle > right) {
        break
      } else {
        cache = nums[middle]
        nums[middle] = nums[left]
        nums[left] = cache
        middle++
      }
    }
  }
};
// @lc code=end

