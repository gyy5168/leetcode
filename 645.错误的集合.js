/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const res = []

  const n = nums.length
  nums.forEach(num => {
    if (num <= n) {}
    const index = (num - 1) % n

    if (nums[index] > n) res.push(index + 1)
    nums[index] += n
  })

  
  nums.forEach((num, i) => {
    if (num <= n) res.push(i + 1)
  })

  return res
};
// @lc code=end

