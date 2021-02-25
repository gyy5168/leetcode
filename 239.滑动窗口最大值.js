/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let res = []
  
  let queue = []

  for (let i = 0; i < nums.length; i++) {
    while(queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop()
    }
    queue.push(i)
    while(queue[0] <= i - k) queue.shift()
    if (i >= k - 1) res.push(nums[queue[0]])
  }
  
  return res
};
// @lc code=end

