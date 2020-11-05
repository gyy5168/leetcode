/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var checkLoop = function (str) {
    if (str.length < 2) return false
    var isLoop = true
    for (let i = 0; i <= str.length / 2; i++) {
      const ele = str[i]
      const eleLoop = str[str.length - 1 - i]
      if (ele !== eleLoop) {
        isLoop = false
        break
      }
    }
    return isLoop
  }
  let group = {}
  let loopStr = s[0] || ''
  for (let i = 0; i < s.length; i++) {
    const ele = s[i]
    if (group[ele]) {
      group[ele].push(i)
    } else {
      group[ele] = [i]
    }
  }
  for (const key in group) {
    const arr = group[key]
    if (group.length === 1) continue
    for (let j = 0; j < arr.length - 1; j++) {
      const start = arr[j]
      for (let k = arr.length - 1; k > j; k--) {
        const end = arr[k]
        if (end - start < loopStr.length) break
        var str = s.substring(start, end + 1)
        if (checkLoop(str)) {
          loopStr = str
        }
      }
    }
  }
  return loopStr
};
// @lc code=end

