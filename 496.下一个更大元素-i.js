/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  // let res = []
  // for (const num of nums1) {
  //   let index = nums2.indexOf(num)
  //   for (let i = index; i < nums2.length; i++) {
  //     if (nums2[i] > num) {
  //       res.push(nums2[i])
  //       break
  //     } else {
  //       if (i === nums2.length - 1) {
  //         res.push(-1)
  //       }
  //     }
  //   }
  // }
  // return res
  let res = []
  let map = new Map()
  let stack = []
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums2[i]) {
      stack.pop()
    }
    if (stack.length) {
      map.set(nums2[i], stack[stack.length - 1])
    } else {
      map.set(nums2[i], -1)
    }
    stack.push(nums2[i])
  }
  for (const num of nums1) {
    res.push(map.get(num))
  }
  return res
};
// @lc code=end

