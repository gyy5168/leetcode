/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [1]
  let sign = 1

  let res = 0

  const n = s.length
  let i = 0

  while(i < n) {
    const char = s[i]
    if (char === ' ') {
      i++
    } else if (char === '(') {
      stack.push(sign)
      i++
    } else if (char === ')') {
      sign = stack.pop()
      i++
    } else if (char === '+') {
      sign = stack[stack.length - 1]
      i++
    } else if (char === '-') {
      sign = -stack[stack.length - 1]
      i++
    } else {
      let num = 0
      while(i < n && !isNaN(Number(s[i])) && s[i] !== ' ') {
        let curr = +s[i]
        num = num * 10 + curr
        i++
      }
      res += sign * num
    }
  }

  return res
};
// @lc code=end

