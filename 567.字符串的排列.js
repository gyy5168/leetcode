/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  s1 = s1.split('').sort().join('')
  for (let i = 0; i <= s2.length - s1.length ; i++) {
    if (s1.indexOf(s2[i]) === -1) continue
    const tmp = s2.slice(i, i + s1.length).split('').sort().join('')
    if (s1 === tmp) return true
  }
  return false
};
// @lc code=end

