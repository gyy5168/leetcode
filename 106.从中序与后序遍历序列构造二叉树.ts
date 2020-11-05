/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  let postIndex = postorder.length - 1
  const idsMap:Map<number, number> = new Map(inorder.map((val, i) => [val, i]))
  const getTree = (left:number, right:number): TreeNode | null => {
    if (left > right) return null
    const val = postorder[postIndex]
    const root = new TreeNode(val)
    const index = idsMap.get(val) as number
    postIndex--
    root.right = getTree(index + 1, right)
    root.left = getTree(left, index - 1)
    return root
  }
  return getTree(0, postorder.length - 1)
};
// @lc code=end

