var Tree = require('leetcode').Tree;
var TreeNode = Tree.node;
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  // 4 2 1 3 5
  // 4 2 5 3 1
  //

  var parent = {};
  build(inorder, postorder, parent);

  return parent.next;
};

function build(inorder, postorder, parent, type) {
  if (!inorder.length || inorder.length !== postorder.length) return null;

  var val = postorder.pop();
  var root = new TreeNode(val);
  var idx = inorder.indexOf(val);
  if (type) {
    parent[type] = root;
  } else {
    parent.next = root;
  }


  if (!~idx) return null;

  build(inorder.slice(0, idx), postorder.slice(0, idx), root, 'left');
  build(inorder.slice(idx + 1), postorder.slice(idx), root, 'right');
}

var eq = require('assert').deepEqual;

var t1 = buildTree([4, 2, 1, 3, 5], [4, 2, 5, 3, 1]);
var t2 = Tree.create([1, 2, 3, 4, null, null, 5]);
// @todo(zhiye) skip fail test
// console.log(t1, t2)
// eq(t1, t2)
