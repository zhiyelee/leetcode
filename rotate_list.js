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
  var len = 0;

  var it = head;
  var end;
  while (it) {
    len ++;
    end = it;
    it = it.next;
  }

  // right rotate k = left rotate len - k

  k =  k % len;
  if (k === 0) return head;

  var i = 0;
  while (head && i < (len - k)) {
    var tmp = head.next;
    end.next = head;
    head.next = null;
    end = head;
    head = tmp;
    i ++;
  }

  return head;
};
