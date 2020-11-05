/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // return haystack.indexOf(needle)
  if (needle === '') return 0
  var i = 0
  while(i <= haystack.length - needle.length) {
    if (haystack[i] === needle[0]) {
      var isSame = true
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          isSame = false
          break
        }
      }
      if (isSame) return i
    }
    i++
  }
  return -1
};
// @lc code=end

