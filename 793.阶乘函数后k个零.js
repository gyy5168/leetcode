/*
 * @lc app=leetcode.cn id=793 lang=javascript
 *
 * [793] 阶乘函数后K个零
 */

// @lc code=start
/**
 * @param {number} K
 * @return {number}
 */
var preimageSizeFZF = function(K) {
  let step = 0
  while (step < K)  step = step * 5 + 1

  while (K) {
      step = (step - 1) / 5
      if (K / step == 5) return 0
      K %= step
  }
  return 5
};
// @lc code=end

