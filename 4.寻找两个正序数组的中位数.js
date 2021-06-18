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
  // let nums = [...nums1, ...nums2].sort((prev, next) => prev - next)
  // if (nums.length === 1) return nums[0]
  // if (nums.length % 2 === 0) {
  //   let middle = nums.length / 2
  //   return (nums[middle - 1] + nums[middle]) / 2
  // } else {
  //   let middle = Math.floor(nums.length / 2)
  //   return nums[middle]
  // }

  const nums = []
  let i = 0
  let j = 0

  while(i < nums1.length || j < nums2.length) {
    if (j === nums2.length || (i < nums1.length && nums1[i] < nums2[j])) {
      nums.push(nums1[i])
      i++
    } else {
      nums.push(nums2[j])
      j++
    }
  }

  const n = nums.length
  if (n === 1) return nums[0]
  if (n % 2 === 0) {
    let middle = n / 2
    return (nums[middle - 1] + nums[middle]) / 2
  } else {
    let middle = Math.floor(n / 2)
    return nums[middle]
  }
};
// @lc code=end

