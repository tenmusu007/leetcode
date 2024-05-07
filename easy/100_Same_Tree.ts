import { TreeNode } from '../node/class';

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

// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//   const arrP: number[] = [];
//   const arrQ = [];
//   let currentP: TreeNode | null = p;
//   let currentQ: TreeNode | null = q;
//   console.log(p);
//   while (currentP !== null) {
//     if (currentP.left !== null) {
//       currentP = currentP.left;
//       arrP.push(currentP.val as number);
//     } else if (currentP.right !== null) {
//       currentP = currentP.right;
//       arrP.push(currentP.val as number);
//     } else {
//       // break;
//       currentP = p;
//     }
//   }
//   console.log('test', arrP);

//   return false;
// }
function isSameTree(first: TreeNode | null, second: TreeNode | null): boolean {
  if (!first && !second) return true;
  if (!first || !second) return false;
  return (
    first?.val === second?.val &&
    isSameTree(first?.left, second?.left) &&
    isSameTree(first?.right, second.right)
  );
}
console.log(
  isSameTree(
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    new TreeNode(1, new TreeNode(2), new TreeNode(3))
  )
);
