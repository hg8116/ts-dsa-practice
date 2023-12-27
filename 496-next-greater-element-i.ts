// https://leetcode.com/problems/next-greater-element-i/description/
// @ts-nocheck

// Define a function named nextGreaterElement that takes two arrays as input.
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  // Initialize an empty stack to help in finding the next greater element.
  let stack: number[] = []

  // Initialize an empty array to store the results.
  let ans: number[] = []

  // Create a map to store the next greater element for each number in nums2.
  let map = new Map<number, number>()

  // Iterate through each number in nums2.
  for (let num of nums2) {
    // While the stack is not empty and the current number is greater than the top of the stack.
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      // Pop elements from the stack and set their next greater element to the current number.
      let val = stack.pop()
      map.set(val, num)
    }

    // Push the current number onto the stack.
    stack.push(num)
  }

  // After iterating through nums2, if there are elements left in the stack,
  // set their next greater element to -1 as there is no greater element.
  while (stack.length > 0) {
    let val = stack.pop()
    map.set(val, -1)
  }

  // Iterate through each number in nums1 and push their corresponding next greater element (from the map) into the result array.
  for (let num of nums1) ans.push(map.get(num))

  // Return the array containing the next greater elements for each number in nums1.
  return ans
}
