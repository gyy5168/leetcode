/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  if (!root) return null
  var stack:Node[] = []
  stack.push(root)
  while (stack.length) {
    var len = stack.length - 1
    while (len >= 0) {
      var node = stack.shift() as Node
      if (len === 0) {
        node.next = null
      } else {
        node.next = stack[0] as Node
      }
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
      len--
    }
  }
  return root
};
// @lc code=end

