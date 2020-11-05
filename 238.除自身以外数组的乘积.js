/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const res = [1]
  
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1]
  }
  let rightTotal = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * rightTotal
    rightTotal = rightTotal * nums[i]
  }
  return res
};
// @lc code=end

