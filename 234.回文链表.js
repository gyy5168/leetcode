/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // var vals = []
  // while(head){
  //   vals.push(head.val)
  //   head = head.next
  // }
  // for (let i = 0, j = vals.length - 1; i < j; i++, j--) {
  //   if (vals[i] !== vals[j]) return false
  // }
  // return true
  if (head === null || head.next === null) return true
  let fast = head
  let slow = head
  let prev = head
  while (fast && fast.next) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }
  prev.next = null
  let secondHead = null
  while(slow) {
    let tmp = slow.next
    slow.next = secondHead
    secondHead = slow
    slow = tmp
  }
  while(head && secondHead) {
    if (head.val !== secondHead.val) return false
    head = head.next
    secondHead = secondHead.next
  }
  return true
};
// @lc code=end

