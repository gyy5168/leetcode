/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // var tmpA = headA
  // while (tmpA) {
  //   var tmpB = headB
  //   while (tmpB) {
  //     if (tmpA === tmpB) return tmpA
  //     tmpB = tmpB.next
  //   }
  //   tmpA = tmpA.next
  // }
  // return null
  // var tmpA = headA
  // var map = new Map()
  // while (tmpA) {
  //   map.set(tmpA, 1)
  //   tmpA = tmpA.next
  // }
  // var tmpB = headB
  // while (tmpB) {
  //   if (map.has(tmpB)) return tmpB
  //   tmpB = tmpB.next
  // }
  // return null
  var tmpA = headA
  var tmpB = headB
  while (tmpA !== tmpB) {
    tmpA = tmpA ? tmpA.next : headB
    tmpB = tmpB ? tmpB.next : headA
  }
  return tmpA
};
// @lc code=end

