/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if (s.legnth < 2) return -1
  for (let i = 0; i < s.length; i++) {
    // let hasSame = false
    // for (let j = 0; j < s.length; j++) {
    //   if (i !== j && s[i] === s[j]) {
    //     hasSame = true
    //     break
    //   }
    // }
    // if (!hasSame) return i
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
  }
  return -1
};
// @lc code=end

