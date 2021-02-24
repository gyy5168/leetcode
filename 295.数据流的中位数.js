/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.arr.push(num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let len = this.arr.length
  if (!len) return null
  this.arr.sort((a, b) => a - b)
  let mid = Math.floor((len - 1) / 2)
  if (len % 2) return this.arr[mid]
  return (this.arr[mid] + this.arr[mid + 1]) / 2
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

