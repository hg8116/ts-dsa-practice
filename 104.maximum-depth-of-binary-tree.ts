// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

// Definition for a binary tree node
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: number) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// Function to find the maximum depth of a binary tree
function maxDepth(root: TreeNode | null): number {
  // Base case: if the root is null, the depth is 0
  if (root === null) return 0

  // Recursively calculate the maximum depth of the left and right subtrees
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)

  // Return the maximum depth of the current subtree (maximum of left and right) + 1
  return Math.max(left, right) + 1
}
