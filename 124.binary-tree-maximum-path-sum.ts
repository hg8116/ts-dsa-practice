// https://leetcode.com/problems/binary-tree-maximum-path-sum/description/

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

function maxPathSum(root: TreeNode | null): number {
  // Initialize a variable to store the maximum path sum, starting with negative infinity
  let ans = -Infinity

  // Helper function to perform the recursive calculation
  function helper(node: TreeNode | null): number {
    // Base case: if the node is null, return 0
    if (node === null) return 0

    // Recursively calculate the maximum path sum for the left and right subtrees
    let left = helper(node.left)
    let right = helper(node.right)

    // Calculate the maximum sum for the current node
    let currMax = Math.max(node.val, node.val + left, node.val + right)

    // Update the global maximum path sum if needed
    ans = Math.max(ans, currMax, node.val + left + right)

    // Return the maximum sum for the current subtree (used for recursion)
    return currMax
  }

  // Start the recursive calculation from the root
  helper(root)

  // Return the final result, which is the maximum path sum in the binary tree
  return ans
}
