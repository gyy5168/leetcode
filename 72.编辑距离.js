/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // let map = new Map()
  // let dp = function (i, j) {
  //   let key = i + '-' + j
  //   let res
  //   if (map.has(key)) return map.get(key)
  //   if (i === -1) {
  //     res = j + 1
  //   } else if (j === -1) {
  //     res = i + 1
  //   } else if (word1[i] === word2[j]) {
      
  //     res =  dp(i - 1, j - 1)
  //   } else {
  //     res = Math.min(
  //       dp(i - 1, j) + 1,
  //       dp(i, j - 1) + 1,
  //       dp(i - 1, j - 1) + 1
  //     )
  //   }
  //   map.set(key, res)
  //   return res
  // }
  // return dp(word1.length - 1, word2.length - 1)

  let m = word1.length
  let n = word2.length
  
  let dp = new Array(m + 1)

  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1)
    dp[i][0] = i
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        )
      }
    }
  }
  return dp[m][n]
};
// @lc code=end

