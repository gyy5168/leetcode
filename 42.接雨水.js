/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // const n = height.length
  // let res = 0

  // for (let i = 1; i < n - 1; i++) {
  //   let left_max = 0
  //   let right_max = 0

  //   for (let j = i; j >= 0; j--) {
  //     left_max = Math.max(left_max, height[j])
  //   }

  //   for (let j = i; j < n; j++) {
  //     right_max = Math.max(right_max, height[j])
  //   }

  //   res += Math.min(left_max, right_max) - height[i]
  // }

  // return res


  // const n = height.length
  // const left_max = new Array(n)
  // const right_max = new Array(n)
  // let res = 0

  // left_max[0] = height[0]
  // right_max[n - 1] = height[n - 1]

  // for (let i = 1; i < n - 1; i++) {
  //   left_max[i] = Math.max(left_max[i - 1], height[i])
  // }

  // for (let i = n - 2; i >= 0; i--) {
  //   right_max[i] = Math.max(right_max[i + 1], height[i])
  // }

  // for (let i = 1; i < n - 1; i++) {
  //   res += Math.min(left_max[i], right_max[i]) - height[i]
  // }

  // return res


  let n = height.length
  if (!n) return 0

  let res = 0

  let left = 0
  let right = n - 1

  let left_max = height[0]
  let right_max = height[n - 1]
  while (left <= right) {
    left_max = Math.max(left_max, height[left])
    right_max = Math.max(right_max, height[right])

    if (left_max < right_max) {
      res += left_max - height[left]
      left++
    } else {
      res += right_max - height[right]
      right--
    }
  }
  return res
};
// @lc code=end

