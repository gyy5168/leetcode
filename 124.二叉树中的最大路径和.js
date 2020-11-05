/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
  if (!root) return 0
  let maxSum = root.val
  const getMaxSum = (node) => {
    if (!node) return 0
    const leftMax = Math.max(getMaxSum(node.left), 0)
    const rightMax = Math.max(getMaxSum(node.right), 0)
    maxSum = Math.max(maxSum, node.val + leftMax + rightMax)
    return node.val + Math.max(leftMax, rightMax)
  }
  getMaxSum(root)
  return maxSum
};
// @lc code=end

