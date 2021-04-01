/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const m = num1.length
  const n = num2.length
  const res = Array(m + n).fill(0)

  for (let i = m - 1; i >= 0; i--) {
    const x = +num1[i]
    for (let j = n - 1; j >= 0; j--) {
      const y = +num2[j]
      const mul = x * y
      
      const index1 = i + j

      const index2 = index1 + 1
      
      const sum = mul + res[index2]

      res[index1] += Math.floor(sum / 10)

      res[index2] = sum % 10
    }
  }
  while(res[0] === 0) {
    res.shift()
  }

  return res.length ? res.join('') : '0'
};
// @lc code=end

