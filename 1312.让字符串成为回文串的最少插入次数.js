/*
 * @lc app=leetcode.cn id=1312 lang=javascript
 *
 * [1312] 让字符串成为回文串的最少插入次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  let n = s.length
  let dp = new Array(n).fill(0)

  let tmp = 0

  for (let i = n - 2; i >= 0; i--) {
    let pre = 0
    for (let j = i + 1; j < n; j++){
      tmp = dp[j]
      if (s[i] === s[j]) {
        dp[j] = pre 
      } else {
        dp[j] = Math.min(dp[j], dp[j - 1]) + 1
      }
      pre = tmp
    }
  }

  return dp[n - 1]
};
// @lc code=end

