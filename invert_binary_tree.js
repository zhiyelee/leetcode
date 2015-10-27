/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

  if (!root) return root;
  var left = root.left;
  var right = root.right;

  if (!right && !left) return root;

  root.right = invertTree(left);
  root.left = invertTree(right);

  return root;
};

var Tree = require('leetcode').Tree;

var eq = require('assert').deepEqual;
eq(invertTree(Tree.create([1, 2, 3])),
  Tree.create([1, 3, 2]));


eq(invertTree(Tree.create([4, 2, 7, 1, 3, 6, 9])),
  Tree.create([4, 7, 2, 9, 6, 3, 1]));
