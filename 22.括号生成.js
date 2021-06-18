/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = []
  const track = []

  const backtrack = (left, right, track) => {
    if (left > right) return
    if (left < 0 || right < 0) return
    if (left === 0 && right === 0) {
      res.push(track.join(''))
      return
    }

    track.push('(')
    backtrack(left - 1, right, track)
    track.pop()

    track.push(')')
    backtrack(left, right - 1, track)
    track.pop()
  }

  backtrack(n, n, track)
  return res

  // const res = []
  // let track = ''

  // const backtrack = (left, right, track) => {
  //   if (left > right) return
  //   if (left < 0 || right < 0) return
  //   if (left === 0 && right === 0) {
  //     res.push(track)
  //     return
  //   }

  //   track += '('
  //   backtrack(left - 1, right, track)
  //   track = track.substr(0, track.length - 1)

  //   track += ')'
  //   backtrack(left, right - 1, track)
  //   track = track.substr(0, track.length - 1)
  // }

  // backtrack(n, n, track)
  // return res
};
// @lc code=end

