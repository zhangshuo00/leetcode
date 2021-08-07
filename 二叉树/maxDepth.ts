/**
 * @desc: 给定一个二叉树，找出其最大深度
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?:number, left?:TreeNode|null, right?:TreeNode|null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function maxDepth(root: TreeNode | null): number {
  if(!root) {
    return 0
  } else {
    const leftHeight = maxDepth(root.left)
    const rightHeight = maxDepth(root.right)
    return Math.max(leftHeight, rightHeight) + 1
  }
}
