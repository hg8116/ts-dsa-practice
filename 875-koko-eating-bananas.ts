// https://leetcode.com/problems/koko-eating-bananas/description/

function minEatingSpeed(piles: number[], h: number): number {
    let start=1, end=Number.MAX_SAFE_INTEGER
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2)
        let count = 0
        for(let i=0; i<piles.length; i++)
            count += Math.ceil(piles[i]/mid)
        if(count > h)
            start = mid+1
        else
            end = mid-1
    }

    return start
};