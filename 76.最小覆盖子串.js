/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let left = 0
  let right = 0

  let window = new Map()
  let need = new Map()
  let valid = 0

  let start = 0
  let len = 0
  
  for (let i = 0; i < t.length; i++) {
    need.set(t[i], need.get(t[i]) ? need.get(t[i]) + 1 : 1)
  }

  while(right < s.length) {
    let curr = s[right]

    if (need.get(curr)) {
      window.set(curr, window.get(curr) ? window.get(curr) + 1 : 1)
      if (window.get(curr) === need.get(curr)) valid++
    }

    while(valid === need.size) {
      if (!len || right - left < len) {
        start = left
        len = right - left + 1
      }
      let first = s[left]
      left++
      if (need.get(first)) {
        if (window.get(first) === need.get(first)) valid--
        window.set(first, window.get(first) - 1)
      }
    }

    right++
  }
  return !len ? '' : s.substr(start, len)
};
// @lc code=end

