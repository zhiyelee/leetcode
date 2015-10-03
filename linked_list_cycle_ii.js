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
var detectCycle = function(head) {
  var slow = head;
  var fast = head;

  while(slow && fast) {
    slow = slow.next;
    fast = fast.next;

    if (!fast) return null;
    fast = fast.next;

    if (fast === slow) break;
  }
  if (!slow || !fast) return null;

  var finder = head;
  while(true) {
     slow = slow.next;
     finder = finder.next;

     if (slow === finder) {
       break;
     }
  }

  return finder;
};
