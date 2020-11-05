/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // if (num === 0) return 0
  // return num % 9 || 9
  
  // return (num - 1) % 9 + 1

  while (num > 9) {
    num = Math.floor(num / 10) + num % 10
  }
  return num
};
// @lc code=end

