/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i]
      if (nums.indexOf(diff) > -1 && nums.indexOf(diff) !== i) {
        return [i, nums.indexOf(diff)]
      }
    }
};
// @lc code=end

