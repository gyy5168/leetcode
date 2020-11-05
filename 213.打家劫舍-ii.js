/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) return nums[0]
  const max = (arr) => {
    if (arr.length === 1) return arr[0]
    const dp = []
    dp[0] = arr[0]
    dp[1] = Math.max(arr[0], arr[1])

    for (let i = 2; i < arr.length; i++) {
      dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1])
    }
    return dp[dp.length - 1]
  }
  return Math.max(max(nums.slice(1)), max(nums.slice(0, nums.length - 1)))
};
// @lc code=end

