export class TreeNode {
  val: number | null;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val?: number | null,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
