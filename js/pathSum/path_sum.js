/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;

  // leaf node
  if (!root.left && !root.right) {
    if (root.val !== sum) {
      return false
    }

    return true;
  }

  var val = root.val;
  var match = false;
  if (root.left) {
    match = hasPathSum(root.left, sum - val)
  }

  if (root.right) {
    match = match || hasPathSum(root.right, sum - val);
  }

  return match;
};
