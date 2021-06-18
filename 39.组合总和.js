/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = []

  const dfs = (target, combine, index) => {
    if (index === candidates.length) return
    if (target === 0) {
      res.push(combine)
      return
    }

    dfs(target, combine, index + 1)
    if (target >= candidates[index]) dfs(target - candidates[index], combine.concat(candidates[index]), index)
  }

  dfs(target, [], 0)
  return res
};
// @lc code=end

