/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  nums.unshift(1)
  nums.push(1)

  let n = nums.length
  let dp = Array.from(Array(n), () => Array(n).fill(0))
  for (let i = n - 3; i >= 0; i--) {
    for (let j = i + 2; j < n; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + nums[i] * nums[k] * nums[j] + dp[k][j])
      }
    }
  }
  return dp[0][n - 1]
};
// @lc code=end

