function ListNode(val) {
    this.val = val;
    this.next = null;
}

function al(arr) {
  var head = new ListNode();
  var current = head;
  arr.forEach(function (item) {
    current.next = new ListNode(item);
    current = current.next;
  });

  return head.next;
}


function la(node) {
  var ans = [];
  while(node) {
    ans.push(node.val)
    node = node.next;
  }

  return ans;
}

exports.nodeList = {
  create: al,
  toArray: la
};

