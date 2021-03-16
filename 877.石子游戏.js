/*
 * @lc app=leetcode.cn id=877 lang=javascript
 *
 * [877] 石子游戏
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
  // let n = piles.length
  // var dp = Array.from({length: n}, () => Array(n).fill(0))
  // for (let i = 0; i < n; i++) {
  //   dp[i][i] = piles[i]
  // }
  // for (let i = n - 2; i >= 0; i--) {
  //   for (let j = i + 1; j < n; j++) {
  //     dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1])
  //   }
  // }
  // return dp[0][n - 1] > 0

  let n = piles.length
  var dp = [...piles]
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[j] = Math.max(piles[i] - dp[j], piles[j] - dp[j - 1])
    }
  }
  return dp[n - 1] > 0
};
// @lc code=end

