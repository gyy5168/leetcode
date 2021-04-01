/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
const memo = new Map()
var diffWaysToCompute = function(expression) {
  const res = []

  if (memo.has(expression)) return memo.get(expression)

  const n = expression.length
  for (let i = 0; i < n; i++) {
    const char = expression[i]
    if (char === '-' || char === '+' || char === '*') {
      const left = diffWaysToCompute(expression.substr(0, i))
      const right = diffWaysToCompute(expression.substr(i + 1))
      left.forEach(a => {
        right.forEach(b => {
          res.push(char === '-' ? a - b : char === '+' ? a + b : a * b)
        })
      })
    }
  }


  if (!res.length) res.push(parseInt(expression))

  memo.set(expression, res)
  return res
};
// @lc code=end

