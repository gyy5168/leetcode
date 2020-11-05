/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  const getRandom = (head1, head2, random) => {
    while(head1) {
      if (head1 == random) {
        return head2
      }
      head1 = head1.next
      head2 = head2.next
    }
    return null
  }
  let tmp = head
  let res = new Node()
  let curr = res
  while(tmp) {
    curr.next = new Node(tmp.val)
    tmp = tmp.next
    curr = curr.next
  }
  tmp = head
  curr = res.next
  while(tmp) {
    if (tmp.random) {
      curr.random = getRandom(head, res.next, tmp.random)
    }
    tmp = tmp.next
    curr = curr.next
  }
  return res.next
};
// @lc code=end

