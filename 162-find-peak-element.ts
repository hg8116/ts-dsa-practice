// https://leetcode.com/problems/find-peak-element/

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