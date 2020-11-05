/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // var res = 0
  // for (let i = 0; i < prices.length; i++) {
  //   const buy = prices[i]
  //   for (let j = i + 1; j < prices.length; j++) {
  //     if (prices[j] - prices[i] > res) res = prices[j] - prices[i]
  //   }
  // }
  // return res
  let res = 0
  let min = prices[0]
  for (let i = 0; i < prices.length; i++) {
    res = Math.max(res, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return res
};
// @lc code=end

