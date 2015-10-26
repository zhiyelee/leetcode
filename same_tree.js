/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p) {
    if (p ^ q) return false;
    return true;
  }
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


var tree = require('./_util').tree;
var eq = require('assert').equal;

var t1 = tree.createTree([1,null,2,3])
var t2 = tree.createTree([1,null,2,3])

eq(isSameTree(t1, t2), true);

