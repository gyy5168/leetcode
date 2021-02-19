/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// var reverseBetween = function(head, m, n) {
//   if (m === 1) return reverse(head, n)
//   head.next = reverseBetween(head.next, m - 1, n - 1)
//   return head
// };
// var tail = null
// var reverse = function (head, n) {
//   if (n === 1) {
//     tail = head.next
//     return head
//   }
//   var temp = reverse(head.next, n - 1)
//   head.next.next = head
//   head.next = tail
//   return temp
// }
var reverseBetween = function(head, m, n) {
  var res = new ListNode()
  res.next = head
  var tempHead = res
  for (let i = 0; i < m - 1; i++) {
    tempHead = tempHead.next
  }
  let prev = null
  let curr = tempHead.next
  for (let i = m; i <= n; i++) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  tempHead.next.next = curr
  tempHead.next = prev
  return res.next
};
// @lc code=end

