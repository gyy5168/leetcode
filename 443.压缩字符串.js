/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  if (chars.length < 2) return chars.length
  // let res = 0
  // let prev = chars[0]
  // let tmpCount = 1
  // for (let i = 1; i <= chars.length; i++) {
  //   if (prev === chars[i]) {
  //     tmpCount++
  //   } else {
  //     chars[res] = prev
  //     res++
  //     if (tmpCount > 1) {
  //       const tmpCountStr = tmpCount.toString()
  //       for (let j = 0; j < tmpCountStr.length; j++) {
  //         chars[res] = tmpCountStr[j]
  //         res++
  //       }
  //     }
  //     prev = chars[i]
  //     tmpCount = 1
  //   }
  // }
  // return res

  let count = 1
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      count++
    } else if (count > 1) {
      chars.splice(i - count + 2, count - 1, ...String(count))
      i = i - count + 1 + String(count).length
      count = 1
    }
  }
  return chars.length
};
// @lc code=end

