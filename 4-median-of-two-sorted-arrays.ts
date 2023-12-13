// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

/*
- The function `findMedianSortedArrays` finds the median of two sorted arrays `nums1` and `nums2`.

- If `nums1` is longer than `nums2`, it swaps them.

- It sets `start` and `end` to 0 and the length of `nums1` respectively.

- It enters a loop that continues until `start` is less than or equal to `end`.

- Inside the loop, it calculates the cut positions in `nums1` and `nums2`.

- It gets the last element on the left and the first element on the right of the cut for both arrays.

- If the last elements on the left are less than or equal to the first elements on the right for both arrays, it calculates the median based on whether the total number of elements is even or odd.

- If the last element on the left of `nums2` is greater than the last element on the left of `nums1`, it moves the cut in `nums1` to the right.

- If the last element on the left of `nums2` is not greater than the last element on the left of `nums1`, it moves the cut in `nums1` to the left.

- If no median is found, it returns 0.
*/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)

  let n = nums1.length,
    m = nums2.length
  let start = 0,
    end = n

  while (start <= end) {
    let cut1 = Math.floor(start + (end - start) / 2)
    let cut2 = Math.floor((n + m + 1) / 2) - cut1

    let l1 = cut1 == 0 ? Number.MIN_SAFE_INTEGER : nums1[cut1 - 1]
    let l2 = cut2 == 0 ? Number.MIN_SAFE_INTEGER : nums2[cut2 - 1]

    let r1 = cut1 == n ? Number.MAX_SAFE_INTEGER : nums1[cut1]
    let r2 = cut2 == m ? Number.MAX_SAFE_INTEGER : nums2[cut2]

    if (l1 <= r2 && l2 <= r1) {
      if ((n + m) % 2 == 0) return (Math.max(l1, l2) + Math.min(r1, r2)) / 2
      else return Math.max(l1, l2)
    } else if (l2 > l1) start = cut1 + 1
    else end = cut1 - 1
  }

  return 0
}
