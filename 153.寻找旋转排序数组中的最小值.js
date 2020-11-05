/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // nums = nums.sort((a, b) => a - b)
  // return nums[0]
  // if (nums.length === 1) return nums[0]
  // let left = 0
  // let right = nums.length - 1
  // if (nums[right] > nums[0]) return nums[0]
  // while (left <= right) {
  //   let mid = left + right >> 1
  //   if (nums[mid] > nums[mid + 1]) return nums[mid + 1]
  //   if (nums[mid] < nums[mid - 1]) return nums[mid]
  //   if (nums[mid] > nums[0]) {
  //     left = mid + 1
  //   } else {
  //     right = mid - 1
  //   }
  // }
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    var mid = left + right >> 1
    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return nums[left]
};
// @lc code=end

