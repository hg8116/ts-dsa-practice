// https://leetcode.com/problems/sliding-window-maximum/description/

// Function to find the maximum element in a sliding window of size k in a given array
function maxSlidingWindow(nums: number[], k: number): number[] {
  // Array to store the maximum elements for each sliding window
  let ans: number[] = []

  // Array to maintain the potential maximum elements in the current window
  let curr: number[] = []

  // Pointers to represent the start and end of the sliding window
  let start = 0,
    end = 0

  // Loop through the array elements
  while (end < nums.length) {
    // Get the length of the current array of potential maximum elements
    let len = curr.length

    // If the current array is empty, or the last element is smaller than the current element, push the current element
    if (len === 0) curr.push(nums[end])
    else {
      // Remove elements from the back of the current array until a greater or equal element is found
      while (curr.length > 0 && curr[curr.length - 1] < nums[end]) curr.pop()
      curr.push(nums[end])
    }

    // Calculate the size of the current sliding window
    let windowSize = end - start + 1

    // If the window size is less than k, continue expanding the window
    if (windowSize < k) end++
    // If the window size is equal to k, record the maximum element and move the window forward
    else if (windowSize === k) {
      ans.push(curr[0])
      // If the maximum element in the window is the element at the start, remove it from the current array
      if (curr[0] === nums[start]) curr.shift()
      start++
      end++
    }
  }

  // Return the array containing maximum elements for each sliding window
  return ans
}
