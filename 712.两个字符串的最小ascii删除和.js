/*
 * @lc app=leetcode.cn id=712 lang=javascript
 *
 * [712] 两个字符串的最小ASCII删除和
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  let m = s1.length
  let n = s2.length

  let memo = new Array(m + 1).fill(-1).map(() => new Array(n + 1).fill(-1))
  
  let dp = function (i, j) {
    let res = 0
    if (i === m) {
      for (; j < n; j++) {
        res += s2.charCodeAt(j)
      }
      return res
    }
    if (j === n) {
      for (; i < m; i++) {
        res += s1.charCodeAt(i)
      }
      return res
    }
    if (memo[i][j] !== -1) return memo[i][j]
    
    if (s1[i] === s2[j]) {
      memo[i][j] = dp(i+ 1, j + 1)
    } else {
      memo[i][j] = Math.min(
        s1.charCodeAt(i) + dp(i+ 1, j),
        s2.charCodeAt(j) + dp(i, j + 1)
      )
    }
    return memo[i][j]
  }

  return dp(0, 0)
};
// @lc code=end

