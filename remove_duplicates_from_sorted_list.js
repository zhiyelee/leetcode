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
  var hash = new Set();
  var current = head;
  var pre = null;

  while (current) {
    var val = current.val;

    if (hash.has(val)) {
      pre.next = current.next;
    } else {
      pre = current;
      hash.add(val);
    }

    current = current.next;
  }

  return head;
};

var eq = require('assert').deepEqual;
var nodeList = require('./_util').nodeList;
var l;

l = nodeList.create([1, 2, 2, 1, 3]);
eq(nodeList.toArray(deleteDuplicates(l)), [1,2,3]);

l = nodeList.create([1, 1]);
eq(nodeList.toArray(deleteDuplicates(l)), [1]);
l = nodeList.create([]);
eq(nodeList.toArray(deleteDuplicates(l)), []);
