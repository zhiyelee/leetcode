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
var rotateRight = function(head, k) {
  if (!head) return head;

  var tail = head;
  var len = 1;
  while (tail.next) {
    len ++;
    tail = tail.next;
  }

  // right rotate k = left rotate len - k
  k =  k % len;
  if (k === 0) return head;

  // circle the link list
  tail.next = head;

  for (var i = 0; i < (len - k); i++) {
    tail = tail.next;
  }

  head = tail.next;
  tail.next = null;

  return head;
};
