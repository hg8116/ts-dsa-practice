// https://www.codingninjas.com/studio/problems/missing-and-repeating-numbers_6828164?leftPanelTabValue=PROBLEM

function findMissingRepeatingNumbers(arr: number[]): number[]{
    let ans = []
    let n = arr.length
    let i=0
    while(i < n){
        let correct = arr[i]-1
        if(arr[i] !== arr[correct])
            [arr[i], arr[correct]] = [arr[correct], arr[i]]
        else
            i++
    }

    for(i=0; i<n; i++){
        if(arr[i] !== i+1){
            ans.push(arr[i])
            ans.push(i+1)
            break
        }
    }
    return ans
}