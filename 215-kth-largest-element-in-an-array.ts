// https://leetcode.com/problems/kth-largest-element-in-an-array/description/
// @ts-nocheck

// Class definition for a Max Heap
class Heap {
  heap: (null | number)[] // Array to represent the heap, initialized with a null placeholder
  constructor() {
    this.heap = [null] // Initialize the heap array with null as the first element
  }

  // Method to swap elements in the heap
  swap(index1: number, index2: number) {
    ;[this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ]
  }

  // Check if the heap is empty (contains only the null placeholder)
  isEmpty() {
    return this.heap.length === 1
  }

  // Method to push a value onto the heap while maintaining the heap property
  push(value) {
    this.heap.push(value)
    let currIndex = this.heap.length - 1
    let parIndex = Math.floor(currIndex / 2)

    // Move the newly added value up the heap until the heap property is satisfied
    while (parIndex > 0 && this.heap[parIndex] < value) {
      this.swap(currIndex, parIndex)
      currIndex = parIndex
      parIndex = Math.floor(parIndex / 2)
    }
  }

  // Method to shift the top element down the heap while maintaining the heap property
  shift() {
    // Handle cases where the heap has only one element (null placeholder)
    if (this.heap.length === 2) return this.heap.pop()
    if (this.isEmpty()) return

    const returnValue = this.heap[1] // Store the top element to be returned later
    this.heap[1] = this.heap.pop() // Replace the top element with the last element in the heap

    let [currIndex, leftIndex, rightIndex] = [1, 2, 3]

    // Move the top element down the heap until the heap property is satisfied
    while (
      this.heap[currIndex] < this.heap[leftIndex] ||
      this.heap[currIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        this.swap(currIndex, rightIndex)
        currIndex = rightIndex
      } else {
        this.swap(currIndex, leftIndex)
        currIndex = leftIndex
      }

      leftIndex = currIndex * 2
      rightIndex = currIndex * 2 + 1
    }
    return returnValue // Return the original top element
  }
}

// Function to find the kth largest element in an array using a max heap
function findKthLargest(nums: number[], k: number): number {
  const heap = new Heap() // Create an instance of the Heap class
  for (let num of nums) heap.push(num) // Push each element from the array into the max heap

  for (let i = 1; i < k; i++) heap.shift() // Perform k-1 shifts to reach the kth largest element

  return heap.shift() // Return the kth largest element
}
