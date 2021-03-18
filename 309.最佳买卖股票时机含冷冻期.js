/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // const n = prices.length
  // let buy = Array(n + 1).fill(0)
  // let sell = Array(n + 1).fill(0)

  // buy[0] = -prices[0]
  // buy[1] = -prices[0]

  // for (let i = 2; i < n + 1; i++) {
  //   buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i - 1])
  //   sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i - 1])
  // }
  // return sell[n]

  const n = prices.length
  let buy = -prices[0]
  let sell = 0
  let sell_pre = 0


  for (let i = 1; i < n; i++) {
    let tmp = sell
    buy = Math.max(buy, sell_pre - prices[i ])
    sell = Math.max(sell, buy + prices[i])
    sell_pre = tmp
  }
  return sell
};
// @lc code=end

