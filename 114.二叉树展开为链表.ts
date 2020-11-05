/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  // if (!root) return
  // const stack:TreeNode[] = []
  // let tmp = root
  // while (tmp || stack.length) {
  //   if (tmp.left) {
  //     if (tmp.right) stack.push(tmp.right)
  //     tmp.right = tmp.left
  //     tmp.left = null
  //     tmp = tmp.right
  //   } else if (tmp.right) {
  //     tmp = tmp.right
  //   } else if (stack.length) {
  //     tmp.right = stack.pop() as TreeNode
  //     tmp = tmp.right
  //   } else {
  //     return
  //   }
  // }
  // if (!root) return
  // const stack:TreeNode[] = []
  // stack.push(root)
  // let prev = null
  // while (stack.length) {
  //   const curr = stack.pop() as TreeNode
  //   if (prev) {
  //     prev.right = curr
  //     prev.left = null
  //   }
  //   if (curr.right) {
  //     stack.push(curr.right)
  //   }
  //   if (curr.left) {
  //     stack.push(curr.left)
  //   }
  //   prev = curr
  // }
  let curr = root
  while (curr) {
    if (curr.left) {
      let pre = curr.left
      while (pre.right) {
        pre = pre.right
      }
      pre.right = curr.right
      curr.right = curr.left
      curr.left = null
    }
    curr = curr.right
  }
};
// @lc code=end

