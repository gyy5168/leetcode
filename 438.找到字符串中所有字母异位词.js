/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let left = 0
  let right = 0

  let window = new Map()
  let need = new Map()
  let valid = 0
  
  let res = []

  for (let i = 0; i < p.length; i++) {
    need.set(p[i], need.get(p[i]) ? need.get(p[i]) + 1 : 1)
  }

  while(right < s.length) {
    let curr = s[right]

    if (need.get(curr)) {
      window.set(curr, window.get(curr) ? window.get(curr) + 1 : 1)
      if (window.get(curr) === need.get(curr)) valid++
    }
    
    while(right - left + 1 >= p.length) {
      if (valid === need.size) res.push(left)
      let first = s[left]
      left++
      if (need.get(first)) {
        if (window.get(first) === need.get(first)) valid--
        window.set(first, window.get(first) - 1)
      }
    }

    right++
  }
  return res
};
// @lc code=end

