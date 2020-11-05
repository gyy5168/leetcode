/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  let stack = [root]
  let res = root.val
  while (stack.length) {
    const tmp = []
    while (stack.length) {
      const node = stack.shift()
      if (node.left) tmp.push(node.left)
      if (node.right) tmp.push(node.right)
    }
    stack = tmp
    if (tmp.length) res = tmp[0].val
  }
  return res
};
// @lc code=end

