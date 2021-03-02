/*
 * @lc app=leetcode.cn id=1081 lang=javascript
 *
 * [1081] 不同字符的最小子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
  let count = new Map()
  
  let res = []
  let map = new Map()
  
  for (let i = 0; i < s.length; i++) {
    count.set(s[i], count.get(s[i]) ? count.get(s[i]) + 1 : 1)
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    count.set(char, count.get(char) - 1)
    if (map.get(char)) continue
    while(res.length && res[0] > char) {
      if (count.get(res[0]) === 0) break
      let first = res.shift()
      map.set(first, false)
    }
    res.unshift(char)
    map.set(char, true)
  }

  return res.reverse().join('')
};
// @lc code=end

