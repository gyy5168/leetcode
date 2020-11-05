/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
  let res = new ListNode('head')
  let node = res
  let sum = 0
  let carry = 0
  while (l1 || l2 || carry) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0
    sum = val1 + val2 + carry
    let val = sum % 10
    node.next = new ListNode(val)
    node = node.next
    carry = sum > 9 ? 1 : 0
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  return res.next
};
// @lc code=end

