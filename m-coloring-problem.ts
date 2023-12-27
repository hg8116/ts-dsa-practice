// https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1#

// Function to perform graph coloring
function graphColoring(graph: boolean[][], m: number, n: number): boolean {
  // Initialize an array to store colors assigned to each node
  const colors: number[] = new Array(n).fill(0)

  // Start the recursive solving process from the first node
  return solve(graph, colors, 0, m)
}

// Recursive function to solve graph coloring
function solve(
  graph: boolean[][],
  colors: number[],
  node: number,
  m: number
): boolean {
  // If all nodes are colored, the graph is successfully colored
  if (node === graph.length) {
    return true
  }

  // Try assigning colors to the current node
  for (let i = 1; i <= m; i++) {
    // Check if the color is valid for the current node
    if (isColorable(graph, colors, node, i)) {
      // Assign the color to the current node
      colors[node] = i

      // Recursively try to color the next node
      if (solve(graph, colors, node + 1, m)) {
        return true // If successful, return true
      } else {
        // If not successful, backtrack and reset the color for the current node
        colors[node] = 0
      }
    }
  }

  // If no valid color is found, return false
  return false
}

// Function to check if a color is valid for a given node
function isColorable(
  graph: boolean[][],
  colors: number[],
  node: number,
  color: number
): boolean {
  // Check all adjacent nodes to see if any have the same color
  for (let i = 0; i < graph.length; i++) {
    if (graph[node][i] === true && colors[i] === color) {
      return false // If an adjacent node has the same color, it's not valid
    }
  }

  // If no adjacent node has the same color, it's valid
  return true
}
