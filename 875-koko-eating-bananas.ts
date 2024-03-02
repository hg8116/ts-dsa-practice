// https://leetcode.com/problems/koko-eating-bananas/description/

/*
- The `minEatingSpeed` function is designed to find the minimum eating speed that allows Koko to finish all bananas within `h` hours.

- The function starts by initializing `start` and `end` pointers to 1 and `Number.MAX_SAFE_INTEGER`, respectively. These represent the minimum and maximum possible eating speeds.

- It enters a `while` loop that continues until `start` is less than or equal to `end`.

- Inside the loop, it calculates the middle value (`mid`) of the current search range, which represents the current eating speed.

- It then initializes a `count` variable to 0. This variable will hold the total hours Koko needs to eat all bananas at the current eating speed.

- It iterates over each pile of bananas. For each pile, it divides the number of bananas in the pile by the current eating speed (`mid`), rounds up to the nearest integer using `Math.ceil`, and adds the result to `count`.

- After calculating the total hours (`count`), it checks if `count` is greater than `h`.

  - If `count` is greater than `h`, it means Koko can't finish all bananas within `h` hours at the current eating speed. So, it updates `start` to `mid + 1` to increase the eating speed.

  - If `count` is not greater than `h`, it means Koko can finish all bananas within `h` hours at the current eating speed. So, it updates `end` to `mid - 1` to try to find a lower eating speed.

- The loop continues, narrowing down the search range until `start` is not less than or equal to `end`.
*/

function minEatingSpeed(piles: number[], h: number): number {
  let start = 1,
    end = Number.MAX_SAFE_INTEGER;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let count = 0;
    for (let i = 0; i < piles.length; i++) count += Math.ceil(piles[i] / mid);
    if (count > h) start = mid + 1;
    else end = mid - 1;
  }

  return start;
}
