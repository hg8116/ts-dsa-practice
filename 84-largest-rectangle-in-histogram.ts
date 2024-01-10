// https://leetcode.com/problems/largest-rectangle-in-histogram/description/

// Function to calculate the largest rectangle area formed by a given array of heights
function largestRectangleArea(heights: number[]): number {
  // Check if the array is empty, if so, the result is 0
  if (heights.length === 0) return 0

  // Get the length of the input array
  let n = heights.length

  // Arrays to store the index of the nearest smaller element on the left and right for each element
  let leftSmall = new Array(n).fill(0)
  let rightSmall = new Array(n).fill(0)

  // Initialize the first element's left index as -1 and the last element's right index as the array length
  leftSmall[0] = -1
  rightSmall[n - 1] = n

  // Loop to find the nearest smaller element on the left for each element
  for (let i = 1; i < n; i++) {
    let prev = i - 1
    while (prev >= 0 && heights[prev] >= heights[i]) prev = leftSmall[prev]
    leftSmall[i] = prev
  }

  // Loop to find the nearest smaller element on the right for each element
  for (let i = n - 2; i >= 0; i--) {
    let next = i + 1
    while (next < n && heights[next] >= heights[i]) next = rightSmall[next]
    rightSmall[i] = next
  }

  // Variable to store the maximum area
  let ans = 0

  // Loop to calculate the area for each element and update the maximum area
  for (let i = 0; i < n; i++)
    ans = Math.max(ans, heights[i] * (rightSmall[i] - leftSmall[i] - 1))

  // Return the maximum area
  return ans
}
