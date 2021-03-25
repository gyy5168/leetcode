/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return []

  const res = []
  let stack = []
  let reverse = false

  stack.push(root)
  

  while(stack.length) {
    res.push([])

    const tmp = []

    while(stack.length) {
      const node = stack.pop()
      res[res.length - 1].push(node.val)
      if (!reverse) {
        if (node.left) tmp.push(node.left)
        if (node.right) tmp.push(node.right)
      } else {
        if (node.right) tmp.push(node.right)
        if (node.left) tmp.push(node.left)
      }
    }

    reverse = !reverse
    stack = tmp
  }

  return res
};
// @lc code=end

