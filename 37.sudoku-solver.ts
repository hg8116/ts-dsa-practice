// https://leetcode.com/problems/sudoku-solver/description/

/**
 Do not return anything, modify board in-place instead.
 */
// Main function to solve Sudoku puzzle
function solveSudoku(board: string[][]): void {
  expertSolver(board)
}

// Recursive function to solve Sudoku using backtracking
function expertSolver(board: string[][]): boolean {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      // Find an empty cell
      if (board[row][col] === ".") {
        // Try placing numbers 1 to 9 in the cell
        for (
          let num = "1";
          num <= "9";
          num = String.fromCharCode(num.charCodeAt(0) + 1)
        ) {
          if (isValid(board, row, col, num)) {
            // If placing the number is valid, update the board and recurse
            board[row][col] = num
            if (expertSolver(board)) return true

            // If the recursion doesn't lead to a solution, backtrack by resetting the cell
            board[row][col] = "."
          }
        }
        // If no valid number can be placed, backtrack to the previous state
        return false
      }
    }
  }
  // If all cells are filled, the Sudoku is solved
  return true
}

// Function to check if placing a number in a given position is valid
function isValid(
  board: string[][],
  row: number,
  col: number,
  num: string
): boolean {
  // Check if 'num' is not present in the current row, column, or 3x3 grid
  for (let i = 0; i < 9; i++) {
    if (
      board[row][i] === num ||
      board[i][col] === num ||
      board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][
        Math.floor(col / 3) * 3 + (i % 3)
      ] === num
    ) {
      return false
    }
  }
  // If 'num' is not found in the row, column, or 3x3 grid, it is a valid placement
  return true
}
