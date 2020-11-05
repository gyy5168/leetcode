/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  // var checkValid = function(root, min, max) {
  //   if (!root) return true
  //   if (root.val <= min || root.val >= max) return false
  //   return checkValid(root.left, min, root.val) && checkValid(root.right, root.val, max)
  // }
  // return checkValid(root, -Infinity, Infinity)
  var tmp = -Infinity
  var stack = []
  while(stack.length || root) {
    while(root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if (root.val <= tmp) return false
    tmp = root.val
    root = root.right
  }
  return true
};
// @lc code=end

