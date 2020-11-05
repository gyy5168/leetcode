/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // return nums.indexOf(target)
  var start = 0
  var end = nums.length - 1
  while (start <= end) {
    var middle = (start + end) >> 1
    if (nums[middle] === target) return middle
    if (nums[start] <= nums[middle]) {
      if (nums[start] <= target && target <= nums[middle]) {
        end = middle
      } else {
        start = middle + 1
      }
    } else {
      if (nums[middle + 1] <= target && target <= nums[end]) {
        start = middle + 1
      } else {
        end = middle
      }
    }
  }
  return -1
};
// @lc code=end

