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
  // if (nums.length === 1) return nums[0]
  // const max = (arr) => {
  //   if (arr.length === 1) return arr[0]
  //   const dp = []
  //   dp[0] = arr[0]
  //   dp[1] = Math.max(arr[0], arr[1])

  //   for (let i = 2; i < arr.length; i++) {
  //     dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1])
  //   }
  //   return dp[dp.length - 1]
  // }
  // return Math.max(max(nums.slice(1)), max(nums.slice(0, nums.length - 1)))
  
  let n = nums.length

  if (n === 1) return nums[0]

  let dp = function (start, end) {
    let total = 0
    let pre_total = 0


    for (let i = start; i < end; i++) {
      let tmp = total
      total = Math.max(total, pre_total + nums[i])
      pre_total = tmp
    }
    return total
  }
  return Math.max(dp(0, n - 1), dp(1, n))
};
// @lc code=end

