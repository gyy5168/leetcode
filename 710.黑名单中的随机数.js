/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[]} blacklist
 */
var Solution = function(N, blacklist) {
  this.count = N - blacklist.length
  this.blackMap = new Map()
  
  for (let i = 0; i < blacklist.length; i++) {
    this.blackMap.set(blacklist[i], 1)
  }

  let last = N - 1

  for (let i = 0; i < blacklist.length; i++) {
    const black = blacklist[i]
    if (black >= this.count) continue
    while(this.blackMap.get(last)) {
      last--
    }
    this.blackMap.set(black, last)
    last--
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
  let index = Math.random() * this.count >> 0
  if (this.blackMap.get(index) !== undefined) return this.blackMap.get(index)
  return index
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(N, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end

