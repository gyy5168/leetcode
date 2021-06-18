/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let res = 1

  const getDepth = (node) => {
    if (!node) return 0

    const left = getDepth(node.left)
    const right = getDepth(node.right)
    
    res = Math.max(res, left + right + 1)
    return Math.max(left, right) + 1
  }
  getDepth(root)
  return res - 1
};
// @lc code=end

