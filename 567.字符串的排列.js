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
  // s1 = s1.split('').sort().join('')
  // for (let i = 0; i <= s2.length - s1.length ; i++) {
  //   if (s1.indexOf(s2[i]) === -1) continue
  //   const tmp = s2.slice(i, i + s1.length).split('').sort().join('')
  //   if (s1 === tmp) return true
  // }
  // return false
  let left = 0
  let right = 0

  let window = new Map()
  let need = new Map()
  let valid = 0
  
  for (let i = 0; i < s1.length; i++) {
    need.set(s1[i], need.get(s1[i]) ? need.get(s1[i]) + 1 : 1)
  }

  while(right < s2.length) {
    let curr = s2[right]

    if (need.get(curr)) {
      window.set(curr, window.get(curr) ? window.get(curr) + 1 : 1)
      if (window.get(curr) === need.get(curr)) valid++
    }
    
    while(right - left + 1 >= s1.length) {
      if (valid === need.size) return true
      let first = s2[left]
      left++
      if (need.get(first)) {
        if (window.get(first) === need.get(first)) valid--
        window.set(first, window.get(first) - 1)
      }
    }

    right++
  }
  return false
};
// @lc code=end

