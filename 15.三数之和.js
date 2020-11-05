/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var answers = []
  if (nums.length < 3) return []
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];
    if (first > 0) break
    if (i > 0 && first == nums[i - 1]) continue
    let secondIndex = i + 1
    let thirdIndex = nums.length - 1
    while (secondIndex < thirdIndex) {
      if (nums[thirdIndex] < 0) break
      let total = first + nums[secondIndex] + nums[thirdIndex]
      if (total === 0) {
        answers.push([first, nums[secondIndex], nums[thirdIndex]])
        while(secondIndex < thirdIndex && nums[secondIndex] === nums[secondIndex + 1]) secondIndex++
        while(secondIndex < thirdIndex && nums[thirdIndex] === nums[thirdIndex - 1]) thirdIndex--
        secondIndex+=1
        thirdIndex-=1
      } else if (total < 0) {
        secondIndex+=1
      } else {
        thirdIndex-=1
      }
    }
  }
  return answers
};
// @lc code=end

