/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (!s || s[0] == '0') return 0
  var res = []
  res[0] = 1
  res[1] = 1
  for (let i = 2; i <= s.length; i++) {
    res[i] = 0
    if (s[i - 1] !== '0') {
      res[i] += res[i - 1]
    }
    if (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] >= '0' && s[i - 1] <= '6')) {
      res[i] += res[i - 2]
    }
    if (s[i - 1] === '0' && s[i] === '0') return 0
  }
  return res[s.length]
};
// @lc code=end

