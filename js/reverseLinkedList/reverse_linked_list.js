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
var reverseList = function(head) {
  var current = head;
  var pre = null;
  while(current) {
    var tmp = current.next;
    current.next = pre;
    pre = current;
    current = tmp;
  }

  head = pre;

  return head;
};
