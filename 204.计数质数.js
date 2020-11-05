/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  // let count = 0
  // for (let i = 2; i < n; i++) {
  //   let isPrime = true
  //   for (let j = 2; j * j <= i; j++) {
  //     if (i % j === 0) {
  //       isPrime = false
  //       break
  //     }
  //   }
  //   if (isPrime) count++
  // }
  // return count

  // if (n < 3) return 0
  // let count = 1
  // for (let i = 3; i < n; i++) {
  //   if (i % 2 === 0) continue
  //   let isPrime = true
  //   for (let j = 3; j * j <= i; j+=2) {
  //     if (i % j === 0) {
  //       isPrime = false
  //       break
  //     }
  //   }
  //   if (isPrime) count++
  // }
  // return count
  const tmp = Array(n).fill(1)
  for (let i = 2; i * i < n; i++) {
    for (let j = i * i; j < n; j+=i) {
      tmp[j] = 0
    }
  }
  return tmp.slice(2).filter(i => i).length
};
// @lc code=end

