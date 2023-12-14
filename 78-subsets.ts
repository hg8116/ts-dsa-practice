// https://leetcode.com/problems/subsets/description/

// This function generates all possible subsets of a given array of numbers
function subsets(nums: number[]): number[][] {
  // Initialize an empty array to store the subsets
  let ans: number[][] = []

  // Call the helper function to generate subsets starting from index 0
  helperForSubsets(0, nums, new Array(), ans)

  // Return the final array of subsets
  return ans
}

// Helper function to generate subsets using backtracking
function helperForSubsets(
  curr: number, // Current index in the array
  nums: number[], // The array of numbers
  sub: number[], // Current subset being constructed
  ans: number[][] // Array to store all subsets
): void {
  // Add a copy of the current subset to the result array
  ans.push([...sub])

  // Iterate through the remaining elements in the array
  for (let i = curr; i < nums.length; i++) {
    // Include the current element in the subset
    sub.push(nums[i])

    // Recursively call the helper function for the next index
    helperForSubsets(i + 1, nums, sub, ans)

    // Backtrack by removing the last element to explore other possibilities
    sub.pop()
  }
}
