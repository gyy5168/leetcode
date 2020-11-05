/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let valid = true
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ])
  let arr = s.split('')
  var cache = []
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    if (!map.has(char)) {
      cache.push(char)
    } else {
      if (cache[cache.length - 1] !== map.get(char)) {
        return false
      } else {
        cache.pop()
      }
    }
  }
  return !cache.length
};
// @lc code=end

