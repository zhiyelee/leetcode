/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var stack = [];

  if (!root) return [];

  stack.push(root);

  var it;
  var ans = [];
  while(stack.length) {
    it = stack.pop();
    if (it.val === null) continue;

    ans.push(it.val);

    if (it.right) {
      stack.push(it.right);
    }
    if (it.left) {
       stack.push(it.left);
    }

  }

  return ans;
};

var Tree = require('leetcode').Tree;
var eq = require('assert').deepEqual;

eq(preorderTraversal(Tree.create([1,null,2,3])), [1,2,3]);
eq(preorderTraversal(Tree.create([1,null,2,3,4, null, 5])), [1,2,3, 5, 4]);

