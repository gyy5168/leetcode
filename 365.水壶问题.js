/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  if (x + y < z) return false
  if (x === 0 || y === 0) return z === 0 || z ===  x + y
  const GCD = (x, y) => {
    let min = Math.min(x, y)
    while (min) {
      if (x % min === 0 && y % min === 0) return min
      min--
    }
    return 1
  }
  return z % GCD(x, y) === 0
};
// @lc code=end

