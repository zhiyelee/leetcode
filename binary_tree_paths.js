// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root.left && !root.right) return [ root.val.toString() ];

  var res = [];
  getPath(root, res);

  return res;
};

function getPath(node, res, pre) {
  if (!node) return;

  if (pre === undefined) {
      pre = node.val;
  } else {
      pre = pre + '->' + node.val;
  }

  if (!node.left && !node.right) {
    return res.push(pre);
  }

  getPath(node.left, res, pre);
  getPath(node.right, res, pre);
}

