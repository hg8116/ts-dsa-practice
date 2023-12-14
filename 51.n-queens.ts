// https://leetcode.com/problems/n-queens/

// Main function to solve N-Queens problem
function solveNQueens(n: number): string[][] {
  // Initialize an array to store the solutions
  let ans: string[][] = []

  // Initialize the chessboard with '.' indicating empty squares
  let board: string[][] = new Array(n)
  for (let i = 0; i < n; i++) board[i] = new Array(n).fill(".")

  // Call the recursive function to find solutions starting from the first row
  mantri(board, n, 0, ans)

  // Return the final array of solutions
  return ans
}

// Recursive function to explore and find N-Queens solutions
function mantri(
  board: string[][],
  n: number,
  r: number,
  ans: string[][]
): void {
  // If all queens are placed (reached the end of the board), add the current solution to the result
  if (r === n) {
    let arr: string[] = []
    for (let i = 0; i < board.length; i++) {
      arr.push(board[i].join(""))
    }
    ans.push(arr)
    return
  }

  // Iterate through each column in the current row
  for (let c = 0; c < board.length; c++) {
    // Check if placing a queen at the current position is safe
    if (isSafe(board, r, c)) {
      // Place the queen and recursively explore the next row
      board[r][c] = "Q"
      mantri(board, n, r + 1, ans)

      // Backtrack by removing the queen to explore other possibilities
      board[r][c] = "."
    }
  }
}

// Function to check if placing a queen at a given position is safe
function isSafe(board: string[][], r: number, c: number): boolean {
  // Check the column for any queen in the same column
  for (let i = r; i >= 0; i--) {
    if (board[i][c] === "Q") {
      return false
    }
  }

  // Check the left diagonal for any queen
  for (let i = r, j = c; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") {
      return false
    }
  }

  // Check the right diagonal for any queen
  for (let i = r, j = c; i >= 0 && j < board.length; i--, j++) {
    if (board[i][j] === "Q") {
      return false
    }
  }

  // If no conflicts, the position is safe
  return true
}
