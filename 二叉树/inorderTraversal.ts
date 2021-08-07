/**
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @desc: 给定一个二叉树的根结点 root ，返回它的中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
let inorderTraversal = function(root) {
  let ans = []
  const inorder = (root) => {
    if(!root) return
    inorder(root.left)
    ans.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return ans
}