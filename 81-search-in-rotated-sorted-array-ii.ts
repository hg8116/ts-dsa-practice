// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

/*
- Calculate the middle index of the current search range using the formula `let mid = Math.floor(start + (end - start) / 2)`.
- Check if the value at the middle index is greater than the value at the `end` index.
  - If it is, then the rotation point is to the right of the middle.
    - If the target is less than or equal to the value at the `end` index or greater than the value at the middle index, update the search range to the right half of the array (`start = mid + 1`).
    - Otherwise, update the search range to the left half (`end = mid`).
- If the value at the middle index is not greater than the value at the `end` index, then the rotation point is to the left of the middle.
  - If the target is greater than the value at the middle index and less than or equal to the value at the `end` index, update the search range to the right half of the array (`start = mid + 1`).
  - Otherwise, update the search range to the left half (`end = mid`).
- After the binary search is complete, check if the target value is at the `start` index.
  - If the target value is not at the `start` index, return `false`.
  - Otherwise, return `true`. This indicates that the target value is in the array.
*/

function search(nums: number[], target: number): boolean {
    let n = nums.length
    let start = 0, end = n-1
    while(start < end){
        while(start < end && nums[start] === nums[start+1])
            start++
        while(start < end && nums[end] === nums[end-1]) 
            end--

        let mid = Math.floor(start + (end - start) / 2)
        if(nums[mid] > nums[end]){
            if(target <= nums[end] || target > nums[mid])
                start = mid + 1
            else
                end = mid
        }
        else{
            if(target <= nums[end] && target > nums[mid])
                start = mid + 1
            else
                end = mid
        }
    }

    if(start === end && target !== nums[start])
        return false
    return true
};

