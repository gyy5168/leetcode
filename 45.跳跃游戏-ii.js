/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  // let n = nums.length
  // let memo = new Array(n).fill(n)

  // let dp = (i) => {
  //   if (i >= n - 1) return 0
  //   if (memo[i] !== n) return memo[i]
  //   for (let j = 1; j <= nums[i]; j++) {
  //     let step = dp(i + j)
  //     memo[i] = Math.min(memo[i], 1 + step)
  //   }
  //   return memo[i]
  // }
  // return dp(0)

  let n = nums.length
  let end = 0
  let farthest = 0
  let res = 0

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(nums[i] + i, farthest)
    if (end === i) {
      res++
      end = farthest
    }
  }
  return res
};
// @lc code=end

