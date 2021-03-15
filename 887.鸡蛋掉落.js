/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
  // let map = new Map()
  
  // let dp = (k, n) => {
  //   if (k === 1) return n
  //   if (n === 0) return 0
  //   let key = k + '-' + n
  //   if (map.has(key)) return map.get(key)
  //   // let count = Infinity

  //   // for (let i = 1; i <= n ; i++) {
  //   //   count = Math.min(count, Math.max(dp(k, n - i), dp(k - 1, i - 1)) + 1)
  //   // }

  //   let count = Infinity

  //   let lo = 1
  //   let hi = n

  //   while(lo <= hi) {
  //     let mid = lo + hi >> 1
  //     let broken = dp(k - 1, mid - 1)
  //     let notBroken = dp(k, n - mid)
  //     if (broken > notBroken) {
  //       hi = mid - 1
  //       count = Math.min(count, broken + 1)
  //     } else {
  //       lo = mid + 1
  //       count = Math.min(count, notBroken + 1)
  //     }
  //   }

  //   map.set(key, count)
  //   return count
  // }
  // return dp(k, n)

  // let dp = new Array(k + 1).fill(0).map(() => new Array(n + 1).fill(0))

  // let f = 0
  // while (dp[k][f] < n) {
  //   f++
  //   for (let i = 1; i <= k; i++) {
  //     dp[i][f] = dp[i][f - 1] + dp[i - 1][f - 1] + 1
  //   }
  // }
  // return f

  let dp = new Array(k + 1).fill(0)
  let f = 0

  while(dp[k] < n) {
    f++
    for (let i = k; i > 0; i--) {
      dp[i] = dp[i - 1] + dp[i] + 1
    }
  }
  return f
};
// @lc code=end

