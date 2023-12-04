function majorityElement(nums: number[]): number[] {
    let first: number = -1
    let firstCount: number = 0
    let second: number = -1
    let secondCount: number = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] === first)
            firstCount++
        else if(nums[i] === second)
            secondCount++
        else if(firstCount === 0){
            first = nums[i]
            firstCount = 1
        }
        else if(secondCount === 0){
            second = nums[i]
            secondCount = 1
        }
        else{
            firstCount--
            secondCount--
        }
    }
    firstCount = 0
    secondCount = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] === first) firstCount++
        else if(nums[i] === second) secondCount++ 
    }

    let ans: number[] = []
    if(firstCount > nums.length/3)
        ans.push(first)
    if(secondCount > nums.length/3)
        ans.push(second)
    
    return ans
};