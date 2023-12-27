// https://leetcode.com/problems/trapping-rain-water/description/

// Define a function named trap that takes an array of heights as input.
function trap(height: number[]): number {
  // Initialize two pointers, left and right, at the beginning and end of the array.
  let left = 0,
    right = height.length - 1

  // Initialize a variable to store the total trapped water.
  let ans = 0

  // Initialize variables to keep track of the maximum height on the left and right sides.
  let maxLeft = 0,
    maxRight = 0

  // Continue the loop until the left pointer crosses the right pointer.
  while (left <= right) {
    // Check if the height at the left pointer is less than or equal to the height at the right pointer.
    if (height[left] <= height[right]) {
      // If the current height at the left pointer is greater than or equal to the max height on the left,
      // update maxLeft. Otherwise, calculate and add the trapped water.
      if (height[left] >= maxLeft) maxLeft = height[left]
      else ans += maxLeft - height[left]

      // Move the left pointer to the right.
      left++
    }
    // If the height at the right pointer is greater than the height at the left pointer.
    else {
      // If the current height at the right pointer is greater than or equal to the max height on the right,
      // update maxRight. Otherwise, calculate and add the trapped water.
      if (height[right] >= maxRight) maxRight = height[right]
      else ans += maxRight - height[right]

      // Move the right pointer to the left.
      right--
    }
  }

  // Return the total trapped water.
  return ans
}
