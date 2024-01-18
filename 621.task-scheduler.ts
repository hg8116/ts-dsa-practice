// https://leetcode.com/problems/task-scheduler/description/

// Function to calculate the least intervals required to execute tasks with a cooldown period
function leastInterval(tasks: string[], n: number): number {
  // Initialize an array to count the occurrences of each task (26 letters in the English alphabet)
  let count = new Array(26).fill(0)

  // Count the occurrences of each task and store in the 'count' array
  for (let task of tasks) count[task.charCodeAt(0) - "A".charCodeAt(0)]++

  // Find the maximum occurrence of a task
  let max = Math.max(...count)

  // Count the number of tasks with the maximum occurrence
  let totalMax = 0
  for (let num of count) {
    if (num === max) totalMax++
  }

  // Calculate the least intervals required based on the given formula
  // max - 1 accounts for the intervals between executions of the most frequent task
  // (max - 1) * (n + 1) represents the intervals with the cooldown period
  // totalMax represents the number of tasks with the maximum occurrence
  // tasks.length represents the total number of tasks
  return Math.max((max - 1) * (n + 1) + totalMax, tasks.length)
}
