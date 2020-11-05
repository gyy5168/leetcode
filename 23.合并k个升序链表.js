/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // var arr = []
  // for (let i = 0; i < lists.length; i++) {
  //   var node = lists[i]
  //   while (node) {
  //     arr.push(node.val)
  //     node = node.next
  //   }
  // }
  // arr.sort((a, b) => b - a)
  // return arr.reduce((prev, curr) => {
  //   return new ListNode(curr, prev)
  // }, null)
  var mergeTwoLists = function(l1, l2) {
    var list = {}
    var next = list
    while (l1 && l2) {
      if (l1.val < l2.val) {
        next.next = l1
        l1 = l1.next
      } else {
        next.next = l2
        l2 = l2.next
      }
      next = next.next
    }
    next.next = l1 || l2
    return list.next
  }
  var merge = function (start, end) {
    if (start === end) return lists[start]
    var middle = Math.floor((start + end) / 2)
    var l1 = merge(start, middle)
    var l2 = merge(middle + 1, end)
    return mergeTwoLists(l1, l2)
  }
  if (lists.length === 0) return null
  return merge(0, lists.length - 1)
};
// @lc code=end

