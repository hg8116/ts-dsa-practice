// https://leetcode.com/problems/asteroid-collision/description/

// Function to simulate asteroid collisions and return the final state of asteroids
function asteroidCollision(asteroids: number[]): number[] {
  // Stack to simulate asteroid collisions
  let stack: number[] = []

  // Loop through each asteroid in the given array
  for (let i of asteroids) {
    // If the asteroid is positive, push it onto the stack
    if (i > 0) stack.push(i)
    else {
      // While there are positive asteroids on the stack and the current asteroid can destroy them
      while (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(i)
      )
        stack.pop()

      // If the stack is empty or the top asteroid on the stack is also negative, push the current asteroid
      if (stack.length === 0 || stack[stack.length - 1] < 0) stack.push(i)
      // If the top asteroid on the stack and the current asteroid annihilate each other, pop the stack
      else if (stack[stack.length - 1] + i === 0) stack.pop()
    }
  }

  // Return the final state of asteroids after collisions
  return stack
}
