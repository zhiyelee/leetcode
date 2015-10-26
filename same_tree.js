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
var util = require('util');

//console.log(tree.createTree([1,null,2,3]))
console.log(util.inspect(tree.createTree([5,4,7,3,null,2,null,-1,null,9]), {depth: 5, colors: true}))
console.log(util.inspect(tree.createTree([1,2,3,null,null,4,null,null,5]), {depth: 5, colors: true}))
console.log(util.inspect(tree.createTree([2,1,3,0,7,9,1,2,null,1,0,null,null,8,8,null,null,null,null,7]), {depth: 5, colors: true}))

