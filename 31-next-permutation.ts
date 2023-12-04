// https://leetcode.com/problems/next-permutation/

/**
 Do not return anything, modify nums in-place instead.
 */
 function nextPermutation(nums: number[]): void {
    if(nums.length == 1)
        return

    let n = nums.length
    let i = n-2;

    while(i >= 0 && nums[i] >= nums[i+1])
        i--

    if(i >= 0){
        let j=n-1;
        while(nums[j] <= nums[i])
            j--;
        swap(nums, i, j)
    }

    reverse(nums, i+1, n-1)
};

function swap(nums: number[], i: number, j: number): void{
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

function reverse(nums: number[], i: number, j: number): void{
    while(i < j)
        swap(nums, i++, j--)
}