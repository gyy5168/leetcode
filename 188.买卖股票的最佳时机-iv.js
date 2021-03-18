/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  // if (!prices.length) return 0

  // const n = prices.length
  // k = Math.min(k, n >> 1)
  
  // const sell = Array.from({length: n}, () => Array(k + 1).fill(0))
  // const buy = Array.from({length: n}, () => Array(k + 1).fill(0))

  // buy[0][0] = -prices[0]
  
  // for (let i = 1; i <=k; i++) {
  //   buy[0][i] = -Infinity
  //   sell[0][i] = -Infinity
  // }

  // for (let i = 1; i < n; i++) {
  //   buy[i][0] = Math.max(buy[i - 1][0], sell[i - 1][0] - prices[i])
  //   for (let j = 1; j <= k; j++) {
  //     sell[i][j] = Math.max(sell[i - 1][j], buy[i - 1][j - 1] + prices[i])
  //     buy[i][j] = Math.max(buy[i - 1][j], sell[i - 1][j] - prices[i])
  //   }
  // }
  // return Math.max(...sell[n - 1])

  // if (!prices.length) return 0

  if (!prices.length) return 0

  const n = prices.length
  
  k = Math.min(k, n >> 1)
  // if (k > n >> 1) {
  //   let sell = 0
  //   let buy = -prices[0]
    
  //   for (let i = 1; i < n; i++) {
  //     let tmp = sell
  //     sell = Math.max(sell, buy + prices[i])
  //     buy = Math.max(buy, tmp - prices[i])
  //   }

  //   return sell
  // }
  
  const sell = Array(k + 1).fill(0)
  const buy = Array(k + 1).fill(0)

  buy[0] = -prices[0]
  
  for (let i = 1; i <=k; i++) {
    buy[i] = -Infinity
    sell[i] = -Infinity
  }

  for (let i = 1; i < n; i++) {
    buy[0] = Math.max(buy[0], sell[0] - prices[i])
    for (let j = 1; j <= k; j++) {
      sell[j] = Math.max(sell[j], buy[j - 1] + prices[i])
      buy[j] = Math.max(buy[j], sell[j] - prices[i])
    }
  }
  return Math.max(...sell)
};
// @lc code=end

