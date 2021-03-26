/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  // let res = []

  // const backtrack = (start, path) => {
  //   if (path.length === k) {
  //     res.push(path.slice())
  //     return
  //   }

  //   for (let i = start; i <= n; i++) {
  //     path.push(i)
  //     backtrack(i + 1, path)
  //     path.pop()
  //   }
  // }

  // backtrack(1, [])

  // return res

  const res = []

  const dfs = (curr, path) => {
    if (n - curr + path.length + 1 < k) {
      return
    }

    if (path.length === k) {
      res.push(path.slice())
      return
    }
    dfs(curr + 1, path.concat(curr))
    dfs(curr + 1, path)
  }

  dfs(1, [])

  return res
};
// @lc code=end

