/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0, maxSum = nums[0]
  nums.forEach(num => {
    // sum = Math.max(sum + num, num)
    if (sum > 0) {
      sum = sum + num
    } else {
      sum = num
    }
    maxSum = Math.max(maxSum, sum)
  })
  return maxSum
  // let getSums = function (left, right) {
  //   if (left === right) return {
  //     leftSum: nums[left],
  //     rightSum: nums[left],
  //     maxSum: nums[left],
  //     sum: nums[left]
  //   }
  //   let middle = (left + right) >> 1
  //   let leftSums = getSums(left, middle)
  //   let rightSums = getSums(middle + 1, right)
  //   return {
  //     leftSum: Math.max(leftSums.leftSum, leftSums.sum + rightSums.leftSum),
  //     rightSum: Math.max(rightSums.rightSum, rightSums.sum + leftSums.rightSum),
  //     maxSum: Math.max(leftSums.maxSum, rightSums.maxSum, leftSums.rightSum + rightSums.leftSum),
  //     sum: leftSums.sum + rightSums.sum
  //   }
  // }
  // return getSums(0, nums.length - 1).maxSum
};
// @lc code=end

