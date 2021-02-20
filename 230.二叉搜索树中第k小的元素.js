/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  // var res = 0
  // var rank = 0
  // var traverse = function (root, k) {
  //   if (!root) return
  //   traverse(root.left, k)
    
  //   rank++
  //   if (k === rank) {
  //     res = root.val
  //     return
  //   }

  //   traverse(root.right, k)
  // }
  // traverse(root, k)
  // return res
  var res = 0
  var traverse = function (root) {
    if (!root) return
    traverse(root.left)
    
    k--
    if (k === 0) {
      res = root.val
      return
    }

    traverse(root.right)
  }
  traverse(root)
  return res
};
// @lc code=end

