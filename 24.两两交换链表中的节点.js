/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) return null
  var list = new ListNode(-1, head)
  var end = list
  while (end.next && end.next.next) {
    let first = end.next
    let second = end.next.next
    first.next = second.next
    second.next = first
    end.next = second
    end = end.next.next
  }
  return list.next
};
// @lc code=end

