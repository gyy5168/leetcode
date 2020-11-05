function ListNode(val, next) {
  this.val = val;
  this.next = next || null;
}
function reverseNode(head) {
  var tail = null
  var curr = head
  while(curr){
    var currNext = curr.next
    curr.next = tail
    tail = curr
    curr = currNext
  }
  return tail
}
let node = [6, 5, 4, 3, 2, 1].reduce((prev, curr) => new ListNode(curr, prev), null)
console.log(reverseNode(node))