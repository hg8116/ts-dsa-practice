class MinHeap {
  heap: number[] // Array to represent the min heap
  constructor() {
    this.heap = [] // Initialize the heap as an empty array
  }

  parentIndex(index: number): number {
    return Math.floor((index - 1) / 2) // Calculate the index of the parent node
  }

  leftChildIndex(index: number): number {
    return 2 * index + 1 // Calculate the index of the left child node
  }

  rightChildIndex(index: number): number {
    return 2 * index + 2 // Calculate the index of the right child node
  }

  swap(index1: number, index2: number): void {
    ;[this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ] // Swap the elements at the specified indices
  }

  heapifyUp(): void {
    let currentIndex = this.heap.length - 1 // Start from the last inserted element
    while (currentIndex > 0) {
      const parentIndex = this.parentIndex(currentIndex)
      if (this.heap[parentIndex] > this.heap[currentIndex]) {
        this.swap(parentIndex, currentIndex) // Swap with the parent if the heap property is violated
        currentIndex = parentIndex // Move up to the parent index
      } else {
        break // Break the loop if the heap property is satisfied
      }
    }
  }

  heapifyDown(): void {
    let currentIndex = 0 // Start from the root
    while (true) {
      const leftChildIndex = this.leftChildIndex(currentIndex)
      const rightChildIndex = this.rightChildIndex(currentIndex)
      let smallestIndex = currentIndex

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      )
        smallestIndex = leftChildIndex // If left child is smaller, update the smallestIndex

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      )
        smallestIndex = rightChildIndex // If right child is smaller, update the smallestIndex

      if (smallestIndex !== currentIndex) {
        this.swap(currentIndex, smallestIndex) // Swap with the smallest child if heap property is violated
        currentIndex = smallestIndex // Move down to the smallest child index
      } else {
        break // Break the loop if the heap property is satisfied
      }
    }
  }

  insert(value: number): void {
    this.heap.push(value) // Add the new element to the end of the array
    this.heapifyUp() // Restore the min heap property by moving the new element up
  }

  extractMin(): number | undefined {
    if (this.heap.length === 0) return undefined // Return undefined if the heap is empty

    const min = this.heap[0] // Save the minimum value at the root
    if (this.heap.length > 1) {
      this.heap[0] = this.heap.pop()! // Replace the root with the last element
      this.heapifyDown() // Restore the min heap property by moving the new root down
    } else {
      this.heap.pop() // Remove the last element if there's only one element in the heap
    }

    return min // Return the extracted minimum value
  }

  peek(): number | undefined {
    return this.heap.length > 0 ? this.heap[0] : undefined // Return the root value without removing it
  }

  isEmpty(): boolean {
    return this.heap.length === 0 // Check if the heap is empty
  }

  size(): number {
    return this.heap.length // Return the number of elements in the heap
  }
}
