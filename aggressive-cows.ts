// https://practice.geeksforgeeks.org/problems/aggressive-cows/0

/*
GitHub Copilot: Sure, here's the explanation in bullet format:

- The `aggressiveCows` function is designed to find the largest minimum distance that can be maintained between `k` cows placed in `n` stalls.

- The function starts by sorting the `stalls` array in ascending order.

- It initializes `start` and `end` pointers to 1 and the difference between the last and first stall, respectively. These represent the minimum and maximum possible distances between any two cows.

- It also initializes `ans` to 1. This variable will hold the largest minimum distance found so far.

- It enters a `while` loop that continues until `start` is less than or equal to `end`.

- Inside the loop, it calculates the middle value (`mid`) of the current search range, which represents a potential minimum distance between any two cows.

- It then checks if it's possible to place `k` cows in the stalls with a minimum distance of `mid` between any two cows by calling the `canPlaceCows` function.

  - If it is, it means a larger minimum distance might be possible, so it updates `ans` to the maximum of `ans` and `mid` and updates `start` to `mid + 1`.

  - If it's not possible, it means the minimum distance is too large, so it updates `end` to `mid - 1`.

- The loop continues, narrowing down the search range until `start` is not less than or equal to `end`.

- Finally, the function returns `ans`, which is the largest minimum distance that can be maintained between any two cows.

- The `canPlaceCows` function is used to check if it's possible to place `k` cows in the stalls with a minimum distance of `mid` between any two cows.

  - It starts by placing a cow in the first stall and then iterates over each remaining stall.

  - For each stall, it checks if the distance to the last stall where a cow was placed is at least `mid`. If it is, it places a cow in the current stall.

  - If it can place all `k` cows in this way, it returns `true`. Otherwise, it returns `false`.
*/

function aggressiveCows(n: number, k: number, stalls: number[]): number {
  stalls.sort((a, b) => a - b)
  let start = 1,
    end = stalls[n - 1] - stalls[0]
  let ans = 1

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2)
    if (canPlaceCows(stalls, mid, k)) {
      ans = Math.max(ans, mid)
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return ans
}

function canPlaceCows(stalls: number[], mid: number, k: number): boolean {
  let lastPlaced = 0
  let count = 1
  for (let i = 1; i < stalls.length; i++) {
    if (stalls[i] - stalls[lastPlaced] >= mid) {
      lastPlaced = i
      count++
    }
    if (count == k) return true
  }

  return false
}
