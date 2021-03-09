/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let n = coins.length
  let dp = new Array(amount + 1).fill(0)

  dp[0] = 1
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j >= coins[i]) dp[j] = dp[j] + dp[j - coins[i]]  
    }
  }
  return dp[amount]
};
// @lc code=end

