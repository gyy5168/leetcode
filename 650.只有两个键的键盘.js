/*
 * @lc app=leetcode.cn id=650 lang=javascript
 *
 * [650] 只有两个键的键盘
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  if (n === 1) return 0
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) return minSteps(i) + minSteps(n / i);
  }
  return n
};
// @lc code=end

