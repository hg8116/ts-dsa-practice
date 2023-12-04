// https://leetcode.com/problems/3sum/

function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a-b)
    let ans: number[][] = []
    let n = nums.length
    for(let i=0; i<n; i++){
        if(i > 0 && nums[i] === nums[i-1])
            continue

        let start = i+1, end = n-1
        while(start < end){
            let sum = nums[i] + nums[start] + nums[end]
            if(sum === 0){
                ans.push([nums[i], nums[start], nums[end]])
                while(start < end && nums[start] === nums[start+1]) start++
                while(start < end && nums[end] === nums[end-1]) end--
                start++
                end--
            }
            else if(sum < 0)
                start++
            else
                end--
        }
    }

    return ans
};