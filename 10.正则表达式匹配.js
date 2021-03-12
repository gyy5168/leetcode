/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // if (!p) return !s
  // let firstMatch = s && (s[0] === p[0] || p[0] === '.')
  // if (p.length > 1 && p[1] === '*') {
  //   return isMatch(s, p.slice(2)) || (firstMatch && isMatch(s.slice(1), p))
  // } else {
  //   return firstMatch && isMatch(s.slice(1), p.slice(1))
  // }

  let map = new Map()
  let dp = (i, j) => {
    let key = i + '-' + j
    if (map.has(key)) return map.get(key)

    if (j === p.length) return i === s.length

    let match
    let firstMath = i < s.length && (s[i] === p[j] || p[j] === '.')

    if (j + 1 < p.length && p[j + 1] === '*') {
      match = dp(i, j + 2) || (firstMath && dp(i + 1, j))
    } else {
      match = firstMath && dp(i + 1, j + 1)
    }
    map.set(key, match)
    return match
  }
  return dp(0, 0)
};
// @lc code=end

