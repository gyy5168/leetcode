/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  // nums = nums.sort((a, b) => a - b)
  // if (nums.length < 2) return [nums]
  // let answers = []
  // for (let i = 0; i < nums.length; i++) {
  //   if (i > 0 && nums[i] === nums[i - 1]) continue
  //   const num = nums[i];
  //   let answer = [num]
  //   let remains = nums.slice(0, i).concat(nums.slice(i + 1))
  //   let arr = permuteUnique(remains)
  //   arr.forEach(item => {
  //     answers.push(answer.concat(item))
  //   })
  // }
  // return answers
  nums = nums.sort((a, b) => a - b)
  let res = []
  let cache = {}
  let backTrack = function (path) {
    if (path.length === nums.length) res.push(path)
    for (let i = 0; i < nums.length; i++) {
      if (cache[i] || (i > 0 && !cache[i-1] && nums[i] === nums[i - 1])) continue
      const item = nums[i]
      path.push(item)
      cache[i] = true
      backTrack(path.concat())
      path.pop()
      cache[i] = false
    }
  }
  backTrack([])
  return res
};
// @lc code=end

