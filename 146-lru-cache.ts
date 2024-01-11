// https://leetcode.com/problems/lru-cache/description/

// Implementation of an LRU (Least Recently Used) Cache using a Map
class LRUCache {
  // Capacity of the LRU Cache
  capacity: number

  // Map to store key-value pairs
  map: Map<number, number>

  // Constructor to initialize the LRUCache with a given capacity
  constructor(capacity: number) {
    this.capacity = capacity
    this.map = new Map()
  }

  // Method to get the value associated with a key in the LRUCache
  get(key: number): number {
    // Retrieve the value from the map
    let value = this.map.get(key)

    // If the key is not present in the cache, return -1
    if (value === undefined) return -1

    // Since the key is accessed, remove it and insert it again to make it the most recently used
    this.map.delete(key)
    this.map.set(key, value)

    // Return the value associated with the key
    return value
  }

  // Method to put a key-value pair into the LRUCache
  put(key: number, value: number): void {
    // If the cache has reached its capacity and the key is not already present, remove the least recently used key
    if (this.map.size >= this.capacity && !this.map.has(key)) {
      let first = this.map.keys().next().value
      this.map.delete(first)
    }

    // Remove the key if it already exists and update it with the new value
    this.map.delete(key)
    this.map.set(key, value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity);
 * var param_1 = obj.get(key);
 * obj.put(key, value);
 */
