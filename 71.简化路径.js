/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let res = []
    let arr = path.split('/')
    for (const item of arr) {
      if (item === '' || item === '.') continue
      if (item === '..') {
        res.pop()
      } else {
        res.push(item)
      }
    }
    return '/' + res.join('/')
};
// @lc code=end

