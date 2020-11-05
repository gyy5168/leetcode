/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const len = nums.length
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len + 1; i++) {
    if (i !== nums[i]) return i
  }
};
// @lc code=end

