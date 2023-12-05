// https://leetcode.com/problems/maximum-product-subarray/

function maxProduct(nums: number[]): number {
    let ans = nums[0], pre=0, suf=0
    let n = nums.length
    for(let i=0; i<n; i++){
        pre = (pre === 0 ? 1 : pre) * nums[i]
        suf = (suf === 0 ? 1 : suf) * nums[n-i-1]

        ans = Math.max(ans, Math.max(pre, suf))
    }

    return ans
};