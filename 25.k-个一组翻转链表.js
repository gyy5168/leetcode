/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseNode = function(head, tail) {
  var tailNext = tail.next
  var curr = head
  while (tailNext !== tail) {
    var headNext = curr.next
    curr.next = tailNext
    tailNext = curr
    curr = headNext
  }
  return [tail, head]
}
var reverseKGroup = function(head, k) {
  var res = new ListNode(-1)
  res.next = head
  var prev = res
  while(head) {
    var tail = head
    for (let i = 0; i < k - 1; i++) {
      if (tail.next) {
        tail = tail.next
      } else {
        return res.next
      }
    }
    var tailNext = tail.next
    var reverse = reverseNode(head, tail)
    head = reverse[0]
    tail = reverse[1]
    prev.next = head
    tail.next = tailNext
    prev = tail
    head = tail.next
  }
  return res.next
};
// @lc code=end

