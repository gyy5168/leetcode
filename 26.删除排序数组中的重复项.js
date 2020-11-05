/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // if (nums.length < 2) return nums.length
  // var i = 1
  // while(i<nums.length) {
  //   if (nums[i] === nums[i - 1]) {
  //     nums.splice(i, 1)
  //   } else {
  //     i++
  //   }
  // }
  // return nums.length
  if (nums.length === 0) return 0
  var len = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[len] = nums[i]
      len++
    }
    
  }
  return len
};
// @lc code=end

