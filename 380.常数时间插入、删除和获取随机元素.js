/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] 常数时间插入、删除和获取随机元素
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = new Map()
  this.set = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.get(val) === undefined) {
    this.set.push(val)
    this.map.set(val, this.set.length - 1)
    return true
  }
  return false
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  let index = this.map.get(val)
  if (index === undefined) return false
  let tmp = this.set[this.set.length - 1]
  this.set[index] = tmp
  this.set.pop()
  this.map.set(tmp, index)
  this.map.delete(val)
  return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let index = Math.random() * this.set.length >> 0
  return this.set[index]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

