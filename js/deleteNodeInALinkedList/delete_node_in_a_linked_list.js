/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  var current = node;
  var slow = {};

  while(current.next)  {
    var next = current.next;
    current.val = next.val;
    slow = current;
    current = next;
  }

  slow.next = null;
};
