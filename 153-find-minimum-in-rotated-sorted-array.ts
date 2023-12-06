// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/*
- The `findMin` function is the main function that calls the `findPivot` function and returns the minimum element in the rotated sorted array.
  - It calls `findPivot` with the array and the initial start and end indices (0 and `nums.length-1` respectively).
  - It then returns the element at the index `findPivot` + 1, which is the minimum element in the array.

- The `findPivot` function finds the pivot point in the array, which is the index of the maximum element.
  - It starts a `while` loop that continues until `start` is less than or equal to `end`.
  - Inside the loop, it calculates the middle index (`mid`) of the current search range.
  - It then checks if `mid` is less than `end` and if the element at `mid` is greater than the element at `mid+1`. If both conditions are true, it returns `mid` as the pivot.
  - If the above condition is not met, it checks if `mid` is greater than `start` and if the element at `mid` is less than the element at `mid-1`. If both conditions are true, it returns `mid-1` as the pivot.
  - If neither of the above conditions is met, it checks if the element at `mid` is greater than or equal to the element at `start`. If it is, it sets `start` to `mid+1`. Otherwise, it sets `end` to `mid-1`.
  - If the `while` loop completes without finding a pivot, it returns `-1`.
*/

function findMin(nums: number[]): number {
    return nums[findPivot(nums, 0, nums.length-1) + 1]
};

function findPivot(nums: number[], start: number, end: number): number{
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2)
        if(mid < end && nums[mid] > nums[mid+1])
            return mid
        else if(mid > start && nums[mid] < nums[mid-1])
            return mid-1
        else if(nums[mid] >= nums[start])
            start = mid+1
        else
            end = mid-1
    }

    return -1
}