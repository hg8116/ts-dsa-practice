// https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1

function bottomView(root: TreeNode | null): number[] {
  // Initialize a map to store nodes at each horizontal distance.
  let map = new Map()

  // Initialize a queue for level order traversal.
  let q = []

  // Enqueue the root node with horizontal distance 0.
  q.push({ hd: 0, node: root })

  // Perform level order traversal.
  while (q.length > 0) {
    // Dequeue the current node and its horizontal distance.
    let curr: { hd: number; node: TreeNode | null } | undefined = q.shift()

    // Update the map with the value of the current node at its horizontal distance.
    map.set(curr?.hd, curr?.node?.val)

    // Enqueue the left child with a reduced horizontal distance (hd - 1).
    if (curr?.node?.left) q.push({ hd: curr.hd - 1, node: curr.node.left })

    // Enqueue the right child with an increased horizontal distance (hd + 1).
    if (curr?.node?.right) q.push({ hd: curr.hd + 1, node: curr.node.right })
  }

  // @ts-ignore
  // Sort the map according to the keys
  let entries = [...map]
  entries.sort((a, b) => a[0] - b[0])

  // Fill the ans array with the values
  let ans = []
  for (let i = 0; i < entries.length; i++) ans.push(entries[i][1])

  // Return the answer array
  return ans
}
