/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = []
  let sign = '+'
  let num = 0

  let n = s.length

  for (let i = 0; i < n; i++) {
    let char = s[i]
    if (!isNaN(Number(char)) && char !== ' ') {
      num = num * 10 + parseInt(char)
    } 
    if (isNaN(Number(char)) || i === n - 1) {
      if (sign === '+') {
        stack.push(num)
      }
      if (sign === '-') {
        stack.push(-num)
      }
      if (sign === '*') {
        stack.push(stack.pop() * num)
      }
      if (sign === '/') {
        stack.push(parseInt(stack.pop() / num))
      }
      sign = char
      num = 0
    }
  }
  let res = 0
  stack.forEach(item => {
    res += item
  })
  return res
};
// @lc code=end

