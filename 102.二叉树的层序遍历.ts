/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  var stack:TreeNode[] = []
  var res = []

  stack.push(root)
  while(stack.length) {
    res.push([] as number[])
    var len = stack.length
    while(len > 0) {
      var node = stack.shift()
      if (!node) continue
      res[res.length - 1].push(node.val)
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
      len--
    }
  }
  return res
};
// @lc code=end

