/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层次遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  var stack:TreeNode[] = []
  var res = []
  let status = false
  stack.push(root)
  while(stack.length) {
    res.push([] as number[])
    var i = 0
    var len = stack.length
    var tmp = []
    while(i < len) {
      var node = stack.shift()
      if (!node) continue
      res[res.length - 1].push(node.val)
      if (status) {
        if (node.right) tmp.unshift(node.right)
        if (node.left) tmp.unshift(node.left)
      } else {
        if (node.left) tmp.unshift(node.left)
        if (node.right) tmp.unshift(node.right)
      }
      i++
    }
    status = !status
    stack = tmp
  }
  return res
};
// @lc code=end

