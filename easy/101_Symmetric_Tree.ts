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

// function isSymmetric(root: TreeNode | null): boolean {
//   console.log(root);
//   if (!root) return false;
//   let stack: TreeNode[] = [];
//   let current: TreeNode | null = root;
//   let result: number[] = [];
//   while (current !== null || stack.length > 0) {
//     while (current !== null) {
//       stack.push(current);
//       current = current.left;
//     }
//     current = stack.pop() as TreeNode;
//     result.push(current.val as number);
//     current = current.right;
//   }
//   console.log(result);
//   const middleIndex = Math.floor(result.length / 2);

//   console.log(middleIndex);

//   const firstTree = result.slice(middleIndex + 1, result.length);
//   const secondTree = result.slice(0, middleIndex);

//   console.log(firstTree);
//   console.log(secondTree);

//   if (firstTree.length !== secondTree.length) return false;
//   for (let x = 0; x < firstTree.length; x++) {
//     if (firstTree[x] !== secondTree[secondTree.length - 1 - x]) {
//       return false;
//     }
//   }
//   return true;
// }
const isSymmetric = (root: TreeNode | null): boolean => {
  return isMirror(root, root);
};

const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;

  return (
    t1.val === t2.val &&
    isMirror(t1.left, t2.right) &&
    isMirror(t1.right, t2.left)
  );
};
console.log(
  isSymmetric(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3))
    )
  )
);

// console.log(
//   isSymmetric(
//     new TreeNode(
//       1,
//       new TreeNode(2, null, new TreeNode(3)),
//       new TreeNode(2, null, new TreeNode(3))
//     )
//   )
// );
// console.log(
//   isSymmetric(
//     new TreeNode(
//       1,
//       new TreeNode(2, new TreeNode(3), new TreeNode(4)),
//       new TreeNode(2, new TreeNode(3), new TreeNode(4))
//     )
//   )
// );

// console.log(
//   isSymmetric(
//     new TreeNode(
//       1,
//       new TreeNode(2, null, new TreeNode(3)),
//       new TreeNode(2, null, new TreeNode(3))
//     )
//   )
// );
