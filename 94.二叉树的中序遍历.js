/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  // const res = []
  // const inorder = function (tree) {
  //   if (!tree) return
  //   inorder(tree.left)
  //   res.push(tree.val)
  //   inorder(tree.right)
  // }
  // inorder(root)
  // return res
  // const res = []
  // const stack = []
  // while (root || stack.length) {
  //   while (root) {
  //     stack.push(root)
  //     root = root.left
  //   }
  //   root = stack.pop()
  //   res.push(root.val)
  //   root = root.right
  // }
  // return res
  const res = []
  let preNode = null
  while(root) {
    if (root.left) {
      preNode = root.left
      while (preNode.right && preNode.right !== root) {
        preNode = preNode.right
      }
      if (!preNode.right) {
        preNode.right = root
        root = root.left
      } else {
        res.push(root.val)
        preNode.right = null
        root = root.right
      }
    } else {
      res.push(root.val)
      root = root.right
    }
  }
  return res
};
// @lc code=end

