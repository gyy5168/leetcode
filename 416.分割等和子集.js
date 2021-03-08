/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = nums.reduce((curr, prev) => curr + prev, 0)
  if (sum % 2 !== 0) return false
  sum = sum / 2

  let n = nums.length
  
  let dp = new Array(n + 1).fill(false).map(() => {
    let arr = new Array(sum + 1).fill(false)
    arr[0] = true
    return arr
  })

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (nums[i - 1] > j) {
        dp[i][j] === dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j- nums[i - 1]]
      }
    }
  }

  return dp[n][sum]
};
// @lc code=end

