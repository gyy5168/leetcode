/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  // if (nums.length < 2) return [nums]
  // let answers = []
  // for (let i = 0; i < nums.length; i++) {
  //   const num = nums[i];
  //   let answer = [num]
  //   let remains = nums.filter(item => item !== num)
  //   let arr = permute(remains)
  //   arr.forEach(item => {
  //     answers.push(answer.concat(item))
  //   })
  // }
  // return answers
  let res = []
  let backTrack = function (path) {
    if (path.length === nums.length) res.push(path)
    for (let i = 0; i < nums.length; i++) {
      const item = nums[i]
      if (path.indexOf(item) === -1) {
        backTrack(path.concat(item))
      }
    }
  }
  backTrack([])
  return res
};
// @lc code=end

