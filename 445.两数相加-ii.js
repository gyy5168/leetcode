/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const stack1 = []
  const stack2 = []
  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }
  let res = null
  let carry = 0
  while (stack1.length || stack2.length || carry) {
    let curr = carry
    if (stack1.length) curr += stack1.pop()
    if (stack2.length) curr += stack2.pop()
    carry = curr > 9 ? 1 : 0
    curr = curr % 10
    let node = new ListNode(curr)
    node.next = res
    res = node
  }
  return res
};
// @lc code=end

