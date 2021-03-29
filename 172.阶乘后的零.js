/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let res = 0
  let devisor = 5

  while(devisor <= n) {
    res += (n / devisor) >> 0

    devisor *= 5
  }
  
  return res
};
// @lc code=end

