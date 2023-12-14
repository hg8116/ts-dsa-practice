// https://leetcode.com/problems/combination-sum/

// Function to find combinations of numbers from 'candidates' that sum up to 'target'
function combinationSum(candidates: number[], target: number): number[][] {
  // Initialize an array to store the result combinations
  let ans: number[][] = []

  // Call the helper function to find combinations starting from index 0
  helperForCombinationSubset(0, candidates, new Array(), ans, target)

  // Return the final array of combinations
  return ans
}

// Helper function for backtracking to find combinations
function helperForCombinationSubset(
  curr: number, // Current index in the 'candidates' array
  arr: number[], // The 'candidates' array
  sub: number[], // Current combination being constructed
  ans: number[][], // Array to store all combinations
  x: number // Remaining target value
) {
  // If the remaining target value is zero, add the current combination to the result
  if (x <= 0) {
    if (x === 0) ans.push([...sub])
    return
  }

  // Iterate through the remaining elements in the 'candidates' array
  for (let i = curr; i < arr.length; i++) {
    // Include the current element in the combination
    sub.push(arr[i])

    // Recursively call the helper function for the next index with updated target value
    helperForCombinationSubset(i, arr, sub, ans, x - arr[i])

    // Backtrack by removing the last element to explore other possibilities
    sub.pop()
  }
}
