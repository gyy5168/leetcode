/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  // const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  // let res = []
  // while (n > 26) {
  //   n = n - 1
  //   let tmp = n
  //   n = Math.floor(n / 26)
  //   res.unshift(arr[tmp % 26])
  // }
  // res.unshift(arr[n - 1])
  // return res.join('')
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let res = ''
  while (n > 0) {
    n--
    // res = str[n % 26] + res
    res = String.fromCharCode(n % 26 + 65) + res
    n = Math.floor(n / 26)
  }
  return res
};
// @lc code=end

