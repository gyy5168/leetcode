/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const res = []
  let tmp = [root]
  while (tmp.length) {
    const tmpNext = []
    while (tmp.length) {
      const node = tmp.shift()
      if (node) {
        res.push(node.val)
        tmpNext.push(node.left)
        tmpNext.push(node.right)
      } else {
        res.push(null)
      }
    }
    tmp = tmpNext
  }
  while (res[res.length - 1] === null) res.splice(-1)
  return JSON.stringify(res)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  data = JSON.parse(data)
  if (!data.length || data[0] === null) return null
  const root = new TreeNode(data[0])
  const stack = [root]
  for (let i = 1; i < data.length; i+=2) {
    const node = stack.shift()
    const left = data[i] !== null && data[i] !== undefined ? new TreeNode(data[i]) : null
    const right = data[i + 1] !== null && data[i + 1] !== undefined ? new TreeNode(data[i + 1]) : null
    if (node) node.left = left
    if (node) node.right = right
    if (left) stack.push(left)
    if (right) stack.push(right)
  }
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

