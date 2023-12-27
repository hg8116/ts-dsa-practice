// https://leetcode.com/problems/word-search/description/

// Declare a global 2D array to track visited cells on the board
let vis: boolean[][]

// Main function to check if the given word exists on the board
function exist(board: string[][], word: string): boolean {
  // Initialize the 'vis' array to track visited cells
  vis = new Array(board.length)
    .fill(0)
    .map(() => new Array(board[0].length).fill(false))

  // Iterate through each cell on the board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // If the first character of the word matches the current cell, start the search
      if (word.charAt(0) === board[i][j] && helper(i, j, 0, board, word)) {
        return true // Return true if the word is found
      }
    }
  }

  return false // Return false if the word is not found in any cell
}

// Recursive helper function for backtracking to find the word on the board
function helper(
  i: number,
  j: number,
  ind: number,
  board: string[][],
  word: string
): boolean {
  // If the entire word has been matched, return true
  if (ind === word.length) {
    return true
  }

  // Check for invalid conditions that should terminate the search
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[i].length ||
    vis[i][j] ||
    board[i][j] !== word.charAt(ind)
  ) {
    return false
  }

  // Mark the current cell as visited
  vis[i][j] = true

  // Recursively explore adjacent cells to find the remaining characters of the word
  if (
    helper(i + 1, j, ind + 1, board, word) ||
    helper(i, j + 1, ind + 1, board, word) ||
    helper(i - 1, j, ind + 1, board, word) ||
    helper(i, j - 1, ind + 1, board, word)
  ) {
    return true // If any of the recursive calls returns true, the word is found
  }

  // Backtrack by marking the current cell as not visited
  vis[i][j] = false

  return false // Return false if the word is not found from the current cell
}
