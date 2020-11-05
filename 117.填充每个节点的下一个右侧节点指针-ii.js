/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return null
  var stack = []
  stack.push(root)
  while (stack.length) {
    var len = stack.length - 1
    while (len >= 0) {
      var node = stack.shift()
      if (len === 0) {
        node.next = null
      } else {
        node.next = stack[0]
      }
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
      len--
    }
  }
  return root
};
// @lc code=end

