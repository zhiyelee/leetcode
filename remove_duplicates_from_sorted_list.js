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
      console.log(hash.keys(), val)
    }

    current = current.next;
  }

  console.log(hash.values())
};

var eq = require('assert').deepEqual;
var nodeList = require('./_util').nodeList;

var l = nodeList.create([1, 2, 2, 1, 3]);
deleteDuplicates(l);
eq(nodeList.toArray(l), [1,2,3]);
