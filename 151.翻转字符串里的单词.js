/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim()
  s = s.replace(/\s+/g, ' ')
  s = s.split(' ').reverse().join(' ')
  return s
  // return s.trim().split(/\s+/).reverse().join(' ')
  // return s.trim().split(' ').filter(item => item !='').reverse().join(' ')
};
// @lc code=end

