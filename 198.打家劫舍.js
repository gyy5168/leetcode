/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let total = 0
  let pre_total = 0

  let n = nums.length

  for (let i = 0; i < n; i++) {
    let tmp = total
    total = Math.max(total, pre_total + nums[i])
    pre_total = tmp
  }
  return total
};
// @lc code=end

