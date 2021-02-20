/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!inorder.length) return null
  let rootVal = postorder.pop()
  let rootIndex = inorder.findIndex(val => val === rootVal)

  var inLeft = inorder.slice(0, rootIndex)
  var inRight = inorder.slice(rootIndex + 1)

  let root = new TreeNode(rootVal)

  root.right = buildTree(inRight, postorder)
  root.left = buildTree(inLeft, postorder)
  return root
};
// @lc code=end

