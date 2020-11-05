/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (!nums.length) return null
  const max = Math.max(...nums)
  const index = nums.indexOf(max)
  const root = new TreeNode(max)
  root.left = constructMaximumBinaryTree(nums.slice(0, index))
  root.right = constructMaximumBinaryTree(nums.slice(index + 1))
  return root
};
// @lc code=end

