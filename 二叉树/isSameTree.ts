/**
 * @desc: 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 */

/**
 * function TreeNode (val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
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

function isSameTree (p: TreeNode | null, q: TreeNode | null): boolean {
  if(p === null && q === null) {
    return true
  } else if (p === null || q === null) {
    return false
  } else if (p.val !== q.val) {
    return false
  } else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
}
