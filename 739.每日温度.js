/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let res = []
  let stack = []
  for (let i = T.length - 1; i >= 0; i--) {
    while(stack && T[stack[stack.length - 1]] <= T[i]) {
      stack.pop()
    }
    res.unshift(stack.length ? stack[stack.length - 1] - i : 0)
    stack.push(i)
  }
  return res
};
// @lc code=end

