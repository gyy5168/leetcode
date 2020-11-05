/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let nums = [...nums1, ...nums2].sort((prev, next) => prev - next)
  if (nums.length === 1) return nums[0]
  if (nums.length % 2 === 0) {
    let middle = nums.length / 2
    return (nums[middle - 1] + nums[middle]) / 2
  } else {
    let middle = Math.floor(nums.length / 2)
    return nums[middle]
  }
};
// @lc code=end

