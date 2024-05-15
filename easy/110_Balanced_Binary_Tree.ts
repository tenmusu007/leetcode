/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from '../node/class';

var isBalanced = function (root) {
  // If the tree is empty, we can say it’s balanced...
  if (root == null) return true;
  // Height Function will return -1, when it’s an unbalanced tree...
  if (Height(root) == -1) return false;
  return true;
};
// Create a function to return the “height” of a current subtree using recursion...
var Height = function (root) {
  // Base case...
  if (root == null) return 0;
  // Height of left subtree...
  let leftHeight = Height(root.left);
  // Height of height subtree...
  let rightHight = Height(root.right);
  console.log(root.val, leftHeight, rightHight);

  // In case of left subtree or right subtree unbalanced, return -1...
  if (leftHeight == -1 || rightHight == -1) return -1;
  // If their heights differ by more than ‘1’, return -1...
  if (Math.abs(leftHeight - rightHight) > 1) return -1;
  // Otherwise, return the height of this subtree as max(leftHeight, rightHight) + 1...
  console.log('koko', Math.max(leftHeight, rightHight) + 1);
  return Math.max(leftHeight, rightHight) + 1;
};
// console.log(
//   isBalanced(
//     new TreeNode(
//       3,
//       new TreeNode(9),
//       new TreeNode(20, new TreeNode(15), new TreeNode(7))
//     )
//   )
// );
console.log(
  isBalanced(
    new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(3, new TreeNode(4), new TreeNode(4)),
        new TreeNode(3)
      ),
      new TreeNode(2)
    )
  )
);
// console.log(isBalanced(null));
// console.log(
//   isBalanced(
//     new TreeNode(
//       1,
//       new TreeNode(2, new TreeNode(4, new TreeNode(8), null), new TreeNode(5)),
//       new TreeNode(3, new TreeNode(6), null)
//     )
//   )
// );
