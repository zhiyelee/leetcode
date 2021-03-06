/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var dummy = {};
  dummy.next = head;
  head = dummy;

  while(head && head.next) {
    if (head.next.val === val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }

  return dummy.next;
};


var eq = require('assert').deepEqual;
var nodeList = require('leetcode').List;

var list = nodeList.create([1, 2, 3, 4, 4]);
list = removeElements(list, 4);
eq(nodeList.toArray(list), [1,2,3]);

list = nodeList.create([1, 1]);
list = removeElements(list, 1);
eq(nodeList.toArray(list), []);
