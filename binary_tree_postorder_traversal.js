/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root) return [];

  var it = root;
  var stack = [];
  var ans = [];

  while(it || stack.length) {
    if (it && it.val !== null) {
      stack.push(it);
      it = it.left;
    } else {
      var top = stack.pop();
      if (top.visited) {
        ans.push(top.val);
      } else {
        top.visited = true;
        stack.push(top);
        it = top.right;
      }
    }
  }

  return ans;
};


var Tree = require('leetcode').Tree;
var eq = require('assert').deepEqual;

eq(postorderTraversal(Tree.create([1, 2, 3, 4, 5, 6])), [4, 5, 2, 6, 3, 1]);
eq(postorderTraversal(Tree.create([1, null, 2, 3])), [3, 2, 1]);
