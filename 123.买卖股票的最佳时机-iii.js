/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let sell1 = 0
  let buy1 = -prices[0]
  
  let sell2 = 0
  let buy2 = -prices[0]

  let n = prices.length
  for (let i = 1; i < n; i++){
    sell2 = Math.max(sell2, buy2 + prices[i])
    buy2 = Math.max(buy2, sell1 - prices[i])

    sell1 = Math.max(sell1, buy1 + prices[i])
    buy1 = Math.max(buy1, -prices[i])
  }
  return sell2
};
// @lc code=end

