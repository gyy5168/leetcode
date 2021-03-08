/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  // let len = s.length
  // let memo = new Array(len).fill(0).map(() => new Array(len).fill(0))
  
  // let dp = function (i, j) {
  //   if (i === j) return 1
  //   if (i > j) return 0
  //   if (memo[i][j]) return memo[i][j]
  //   if (s[i] === s[j]) {
  //     memo[i][j] = 2 + dp(i + 1, j - 1)
  //   } else {
  //     memo[i][j] = Math.max(
  //       dp(i + 1, j),
  //       dp(i, j - 1)
  //     )
  //   }
  //   return memo[i][j]
  // }
  // return dp(0, len - 1)
  let len = s.length
  let dp = new Array(len).fill(0).map(() => new Array(len).fill(0))
  
  for (let i = 0; i < len; i++) {
    dp[i][i] = 1
  }
  // for (let i = 1; i < len; i++) {
  //   for (let j = i - 1; j >= 0; j--) {
  //     if (s[i] === s[j]) {
  //       dp[i][j] = 2 + dp[i - 1][j + 1]
  //     } else {
  //       dp[i][j] = Math.max(
  //         dp[i - 1][j],
  //         dp[i][j + 1]
  //       )
  //     }
  //   }
  // }
  // return dp[len - 1][0]

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = 2 + dp[i + 1][j - 1]
      } else {
        dp[i][j] = Math.max(
          dp[i + 1][j],
          dp[i][j - 1]
        )
      }
    }
  }
  return dp[0][len - 1]
};
// @lc code=end

