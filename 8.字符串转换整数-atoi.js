/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var num = parseInt(str, 10)
  if (isNaN(num)) return 0
  if (num < Math.pow(-2, 31)) return Math.pow(-2, 31)
  if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1
  return num
};
// @lc code=end

