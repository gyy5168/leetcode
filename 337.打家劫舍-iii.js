/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
 * @return {number}
 */
var rob = function(root) {
  // let memo = new Map()
  
  // let dp = function (root) {
  //   if (root === null) return 0
  //   if (memo.has(root)) return memo.get(root)

  //   let robnode = root.val + (root.left !== null ? (dp(root.left.left) + dp(root.left.right)) : 0) + (root.right != null ? (dp(root.right.left) + dp(root.right.right)) : 0)
    
  //   let robnext = dp(root.left) + dp(root.right)

  //   let res = Math.max(robnode, robnext)

  //   memo.set(root, res)

  //   return res
  // }

  // return dp(root)

  let dp = function (root) {
    if (root === null) return [0, 0]

    let left = dp(root.left)
    let right = dp(root.right)

    let robnode = root.val + left[0] + right[0]
    
    let robnext = Math.max(left[0], + left[1]) + Math.max(right[0], + right[1])


    return [robnext, robnode]
  }

  let res = dp(root)

  return Math.max(res[0], res[1])
};
// @lc code=end

