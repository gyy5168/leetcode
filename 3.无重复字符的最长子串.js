/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = 0
  
  let left = 0
  let right = 0
  let floatWindow = new Map()
  
  while(right < s.length) {
    let char = s[right]
    
    floatWindow.set(char, floatWindow.get(char) ? floatWindow.get(char) + 1 : 1)

    while(floatWindow.get(char) > 1) {
      let first = s[left]
      left++
      floatWindow.set(first, floatWindow.get(first) - 1)
    }

    if (right - left + 1 > res) res = right - left + 1 
    right++
  }
  return res
};
// @lc code=end

