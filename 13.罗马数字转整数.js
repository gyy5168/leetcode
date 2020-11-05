/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // const normal = {
  //   'M': 1000,
  //   'D': 500,
  //   'C': 100,
  //   'L': 50,
  //   'X': 10,
  //   'V': 5,
  //   'I': 1
  // }
  // const special = {
  //   'CM': 900,
  //   'CD': 400,
  //   'XC': 90,
  //   'XL': 40,
  //   'IX': 9,
  //   'IV': 4
  // }
  // var num = 0
  // for (const key in special) {
  //   if (s.indexOf(key) > -1) {
  //     num += special[key]
  //     s = s.replace(key, '')
  //   }
  // }
  // s = s.split('')
  // s.map(key => {
  //   num += normal[key]
  // })
  const keys = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }
  num = 0
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const next = s[i+1] || 0
    if (keys[curr] < keys[next]) {
      num -= keys[curr]
    } else {
      num += keys[curr]
    }
  }
  return num
};
// @lc code=end

