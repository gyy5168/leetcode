/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  let treeMap = new Map()
  let res = []
  let traverse = function (root) {
    if (!root) return '#'
    let left = traverse(root.left)
    let right = traverse(root.right)
    
    let subtree = `${left},${right},${root.val}`
    if (treeMap.get(subtree)) {
      treeMap.set(subtree, treeMap.get(subtree) + 1)
    } else {
      treeMap.set(subtree, 1)
    }
    if (treeMap.get(subtree) === 2) {
      res.push(root)
    }
    return subtree
  }
  traverse(root)
  return res
};
// @lc code=end

