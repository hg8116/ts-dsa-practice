// https://www.geeksforgeeks.org/problems/minimize-max-distance-to-gas-station/1

/*
- The function `findSmallestMaxDist` finds the smallest maximum distance between gas stations after adding `K` new stations.

- It starts by finding the maximum distance between any two existing stations.

- It sets `start` to 0 and `end` to the maximum distance.

- It enters a loop that continues until the difference between `end` and `start` is less than a small value `diff`.

- Inside the loop, it calculates the middle value `mid` and checks if the number of new stations needed to ensure the maximum distance between any two stations is not more than `mid` is less than or equal to `K`.

- If it is, it means a smaller maximum distance might be possible, so it updates `end` to `mid`.

- If it's not, it means the maximum distance is too small, so it updates `start` to `mid`.

- Finally, it returns `end`, which is the smallest maximum distance that can be achieved.

- The function `stationsInBetween` calculates the number of new stations needed to ensure the maximum distance between any two stations is not more than a given distance.

- It iterates over each pair of existing stations and calculates the number of new stations needed between them by dividing the distance between them by the given distance.

- It adds up the number of new stations needed for all pairs of existing stations and returns the total.
*/

function findSmallestMaxDist(stations: number[], K: number): number {
  const n = stations.length
  let max = Number.MIN_VALUE

  for (let i = 0; i < n - 1; i++) {
    max = Math.max(max, stations[i + 1] - stations[i])
  }

  let start = 0
  let end = max
  const diff = 1e-6

  while (end - start > diff) {
    const mid = start + (end - start) / 2
    if (stationsInBetween(stations, mid) <= K) {
      end = mid
    } else {
      start = mid
    }
  }

  return end
}

function stationsInBetween(arr: number[], distance: number): number {
  let count = 0
  for (let i = 0; i < arr.length - 1; i++) {
    const stations = (arr[i + 1] - arr[i]) / distance
    count += stations
  }
  return count
}
