// https://leetcode.com/problems/find-peak-element/

/*
- The `findPeakElement` function is designed to find a peak element in an array. A peak element is an element that is greater than its neighbors.

- The function starts by initializing `start` and `end` pointers to the beginning and end of the array, respectively.

- It enters a `while` loop that continues until `start` is less than `end`.

- Inside the loop, it calculates the middle index (`mid`) of the current search range using the formula `let mid = Math.floor(start + (end - start) / 2)`.

- It then checks if the element at `mid` is greater than the next element (`nums[mid+1]`).

  - If it is, it means a peak is to the left of `mid` (including `mid` itself), so it updates `end` to `mid`.

  - If the element at `mid` is not greater than the next element, it means a peak is to the right of `mid`, so it updates `start` to `mid + 1`.

- The loop continues, narrowing down the search range until `start` is not less than `end`.

- Finally, the function returns `end`, which is the index of a peak element.
*/

function findPeakElement(nums: number[]): number {
    let start=0, end=nums.length-1, ans=-1
    while(start < end){
        let mid = Math.floor(start + (end - start) / 2)
        if(nums[mid] > nums[mid+1])
            end = mid
        else
            start = mid + 1
    }

    return end
};