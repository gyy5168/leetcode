/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  // let res = 0
  // let backtrack = function (nums, i, rest) {
  //   if (i === nums.length) {
  //     if (rest === 0) res++
  //     return
  //   }
  //   rest += nums[i]
  //   backtrack(nums, i + 1, rest)
  //   rest -= nums[i]

  //   rest -= nums[i]
  //   backtrack(nums, i + 1, rest)
  //   // rest += nums[i]
  // }
  // backtrack(nums, 0, S)
  // return res

  // let map = new Map()
  // let dp = function (nums, i, rest) {
  //   if (i === nums.length) {
  //     return rest === 0 ? 1 : 0
  //   }
  //   let key = i + '-' + rest
  //   if (map.has(key)) return map.get(key)

  //   let result = dp(nums, i + 1, rest - nums[i]) + dp(nums, i + 1, rest + nums[i])
  //   map.set(key, result)
  //   return result
  // }

  // return dp(nums, 0, S)

  let subsets = function (nums, sum) {
    let dp = new Array(sum + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i <= nums.length; i++) {
      for (let j = sum; j >= nums[i]; j--) {
        dp[j] = dp[j] + dp[j - nums[i]]
      }
    }
    return dp[sum]
  }

  let sum = nums.reduce((curr, prev) => curr + prev, 0)
  if (sum < S || (sum + S) % 2 === 1) return 0
  return subsets(nums, (sum + S) / 2)
};

// @lc code=end

