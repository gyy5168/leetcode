/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0) return 0
  if (N === 1 || N ===2) return 1
  let prev = 1
  let curr = 1
  for (let i = 3; i <= N; i++) {
    const tmp = prev + curr
    prev = curr
    curr = tmp
  }
  return curr
};
// @lc code=end

