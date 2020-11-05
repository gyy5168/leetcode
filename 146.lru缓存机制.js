/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  // this.capacity = capacity
  // this.keys = []
  // this.values = {}
  this.capacity = capacity
  this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  // const index = this.keys.findIndex(item => item === key)
  // if (index > -1) {
  //   this.keys.splice(index, 1)
  //   this.keys.push(key)
  // }
  // return this.values[key] || -1
  const res = this.map.get(key)
  if (!res) return -1
  this.map.delete(key)
  this.map.set(key, res)
  return res
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // const index = this.keys.findIndex(item => item === key)
  // if (index > -1) {
  //   this.keys.splice(index, 1)
  // } else if (this.keys.length >= this.capacity) {
  //   var tmp = this.keys.shift()
  //   delete this.values[tmp]
  // }
  // this.keys.push(key)
  // this.values[key] = value
  this.map.delete(key)
  this.map.set(key, value)
  if (this.map.size > this.capacity) {
    this.map.delete(this.map.keys().next().value)
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
