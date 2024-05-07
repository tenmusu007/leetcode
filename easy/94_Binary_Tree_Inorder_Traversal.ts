import { TreeNode } from '../node/class';
// class TreeNode {
//   val: number | null;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(
//     val?: number | null,
//     left?: TreeNode | null,
//     right?: TreeNode | null
//   ) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }
// const getVal = (root: TreeNode | null): number[] => {
//   if (root === null) return [];
//   if (root.val) {
//     return [root.val, ...getVal(root.left)];
//   }
//   return [...getVal(root.right)];
// };

// function inorderTraversal(root: TreeNode | null): number[] {
//   if (root === null) return [];
//   const value = getVal(root);
//   console.log(value);

//   return [];
// }

// console.log(
//   inorderTraversal(
//     new TreeNode(1, new TreeNode(null, new TreeNode(2, new TreeNode(3))))
//   )
// );

function inorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  // if (root === null) {
  //   return result;
  // }

  // function helper(node: TreeNode | null) {
  //   if (node !== null) {
  //     if (node.left !== null) {
  //       console.log(node.left, 'node.left');
  //       helper(node.left);
  //     }
  //     result.push(node.val as number);
  //     if (node.right !== null) {
  //       helper(node.right);
  //     }
  //   }
  //   console.log(result, 'result');
  // }

  // helper(root);
  // return result;

  let stack: TreeNode[] = [];
  let current: TreeNode | null = root;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    console.log('koko:', current);
    current = stack.pop() as TreeNode;
    console.log('ato', current);

    result.push(current.val as number);
    current = current.right;
  }

  return result;
}

console.log(
  inorderTraversal(
    new TreeNode(
      1,
      new TreeNode(5, new TreeNode(6, null), new TreeNode(1, null)),
      new TreeNode(2, new TreeNode(3))
    )
  )
);
