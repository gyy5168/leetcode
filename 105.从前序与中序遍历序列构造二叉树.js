/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null
  let rootVal = preorder[0]
  let rootIndex = inorder.findIndex(val => val === rootVal)

  var preLeft = preorder.slice(1, rootIndex + 1)
  var preRight = preorder.slice(rootIndex + 1)
  var inLeft = inorder.slice(0, rootIndex)
  var inRight = inorder.slice(rootIndex + 1)

  let root = new TreeNode(rootVal)
  root.left = buildTree(preLeft, inLeft)
  root.right = buildTree(preRight, inRight)
  return root
};
// @lc code=end

