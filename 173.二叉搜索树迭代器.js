/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  if (!root) {
    this.stack = []
    return
  }
  let stack = []
  // let tmp = [root]
  // while (tmp.length) {
  //   let node = tmp.pop()
  //   stack.push(node.val)
  //   if (node.left) tmp.push(node.left)
  //   if (node.right) tmp.push(node.right)
  // }
  // stack.sort((a, b) => a - b)
  const tmp = []
  while (root || tmp.length) {
    while (root) {
      tmp.push(root)
      root = root.left
    }
    root = tmp.pop()
    stack.push(root.val)
    root = root.right
  }
  this.stack = stack
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.stack.shift()
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return !!this.stack.length
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

