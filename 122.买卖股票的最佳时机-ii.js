/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // var res = 0
  // let n = prices.length

  // for (let i = 1; i < n; i++) {
  //   res += Math.max(0, prices[i] - prices[i - 1])
  // }
  // return res

  let n = prices.length
  let dp0 = 0
  let dp1 = -prices[0]
  
  for (let i = 1; i < n; i++) {
    let tmp = dp0
    dp0 = Math.max(dp0, dp1 + prices[i])
    dp1 = Math.max(dp1, tmp - prices[i])
  }

  return dp0
};
// @lc code=end

