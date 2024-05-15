import { TreeNode } from '../node/class';

// function maxDepth(root: TreeNode | null): number {
// if (root === null) return 0;
// let stack: TreeNode[] = [];
// let current: TreeNode | null = root;
// let count = 0;
// let countRight = 0;
// while (current !== null || stack.length > 0) {
//   while (current !== null) {
//     stack.push(current);
//     current = current.left;
//     count += 1;
//     // console.log(current);
//   }
//   current = stack.pop() as TreeNode;
//   console.log(current);
//   current = current.right;
//     countRight += 1;
// }
// console.log("left", count, "right", countRight);

// return count;
// }
// Best answer
// var maxDepth = function (root) {
//   if (!root) return 0;
//   const leftDepth = maxDepth(root.left);
//   const rightDepth = maxDepth(root.right);
//   return Math.max(rightDepth) + 1;
// };

// better
var maxDepth = function (root) {
  if (!root) return 0;
  let queue = [root]; // ルートノードから開始
  let depth = 0;
  while (queue.length > 0) {
    let levelSize = queue.length; // 現在のレベルのノード数
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift(); // キューからノードを取り出す
      // 左右の子ノードがあればキューに追加
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    depth++; // このレベルのノードをすべて処理したので、深さを1増やす
  }
  return depth;
};
console.log(
  maxDepth(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);
// console.log(maxDepth(new TreeNode(1, null, new TreeNode(2))));
