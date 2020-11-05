/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let res = 0
  let i = 0
  while (i < s.length) {
    let num = s[i].charCodeAt() - 64
    res = res * 26 + num
    i++
  }
  return res
};
// @lc code=end

