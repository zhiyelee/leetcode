/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *    this.val = val;
 *    this.next = null;
 * }
 */

function ListNode(val) {
   this.val = val;
   this.next = null;
}

/**
 * @param {ListNode} head
 * @returns {ListNode}
 */
var swapPairs = function(head) {

    if (!(head && head.next)) return head;
    var sentinel = new ListNode();
    sentinel.next = head;

    var cursor = sentinel;
    while(cursor.next && cursor.next.next) {
        var n = cursor.next;
        var nn = n.next;

        // swap
        n.next = nn.next;
        nn.next = n;
        cursor.next = nn;

        cursor = n;
    }

    return sentinel.next;
};

function a2l(arr) {
    var guard = new ListNode()
        , curr = guard;
    for (var i =0; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return guard.next;
}

function pl(head) {
    while (head) {
        head = head.next;
    }
}


pl(swapPairs(a2l(['1', '2', '3'])))
pl(swapPairs(a2l(['1', '2', '3', '4'])))

