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
var deleteDuplicates = function(head) {
  var current = head;
  var pre = null;

  while (current) {
    var val = current.val;

    if (pre && pre.val === val) {
      pre.next = current.next;
    } else {
      pre = current;
    }

    current = current.next;
  }

  return head;
};

var eq = require('assert').deepEqual;
var nodeList = require('leetcode').List;
var l;

l = nodeList.create([1, 2, 2, 3]);
eq(nodeList.toArray(deleteDuplicates(l)), [1,2,3]);

l = nodeList.create([1, 1, 1]);
eq(nodeList.toArray(deleteDuplicates(l)), [1]);
l = nodeList.create([]);
eq(nodeList.toArray(deleteDuplicates(l)), []);
