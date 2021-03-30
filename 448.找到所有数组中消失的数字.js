/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  // let i = 0
  // const n = nums.length
  // while(i < n) {
  //   if (nums[i] === i + 1) {
  //     i++
  //     continue
  //   }

  //   const index = nums[i] - 1
  //   if (nums[i] === nums[index]) {
  //     i++
  //     continue
  //   }
  //   [nums[index], nums[i]] = [nums[i], nums[index]]
  // }
  // const res = []
  // for (let i = 0; i < n; i++) {
  //   if (nums[i] !== i + 1) res.push(i + 1)
  // }
  
  // return res

  const n = nums.length
  nums.forEach(num => {
    const index = (num - 1) % n
    nums[index] += n
  })

  const res = []
  nums.forEach((num, i) => {
    if (num <= n) res.push(i + 1)
  })

  return res
};
// @lc code=end

