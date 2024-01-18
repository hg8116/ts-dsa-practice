// https://leetcode.com/problems/diameter-of-binary-tree/description/

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

// Function to find the diameter of a binary tree
function diameterOfBinaryTree(root: TreeNode | null): number {
  // Variable to store the diameter of the binary tree
  let diameter = 0

  // Helper function to perform depth-first search and calculate the depth
  function dfs(node: TreeNode | null): number {
    // Base case: if the node is null, the depth is 0
    if (node === null) return 0

    // Recursively calculate the depth of the left and right subtrees
    let left = dfs(node.left)
    let right = dfs(node.right)

    // Update the diameter if the sum of left and right depths is greater than the current diameter
    diameter = Math.max(diameter, left + right)

    // Return the maximum depth of the current subtree
    return Math.max(left, right) + 1
  }

  // Start the depth-first search from the root
  dfs(root)

  // Return the calculated diameter of the binary tree
  return diameter
}
