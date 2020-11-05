/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  // if (!root) return true
  // var check = function(left: TreeNode | null, right: TreeNode | null): boolean {
  //   if (!left && !right) return true
  //   if (!left || !right) return false
  //   return left.val === right.val && check(left.left, right.right) && check(left.right, right.left)
  // }
  // return check(root.left, root.right)
  if (!root) return true
  let stack:(TreeNode | null)[] = []
  stack.push(root.left, root.right)
  while(stack.length) {
    let left = stack.pop()
    let right = stack.pop()
    if (!left && !right) continue
    if ((!left || !right) || (left.val !== right.val)) return false
    stack.push(left.left)
    stack.push(right.right)
    stack.push(left.right)
    stack.push(right.left)
  }
  return true
};
// @lc code=end

