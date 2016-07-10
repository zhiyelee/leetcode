/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return [];

  var stack = [];
  var it;
  var ans = [];
  it  = root;
  while(it || stack.length) {
    if (it && it.val !== null) {
      stack.push(it);
      it = it.left;
    } else {
      var top = stack.pop();
      ans.push(top.val);
      it = top.right;
    }
  }

  return ans;
};

var Tree = require('leetcode').Tree;
var eq = require('assert').deepEqual;

eq(inorderTraversal(Tree.create([1, null, 2, 3])), [1, 3, 2]);
eq(inorderTraversal(Tree.create([1, null, 2, 3, 4, null, 5])), [1, 3, 5, 2, 4]);
