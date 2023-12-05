// https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1

function inversionCount(arr: number[], n: number): number {
    let temp = new Array(n)
    return mergeSort(arr, temp, 0, n-1)
}

function mergeSort(arr: number[], temp: number[], left: number, right: number): number{
    let mid, count = 0
    if(left < right){
        mid = Math.floor((left + right) / 2)
        count += mergeSort(arr, temp, left, mid)
        count += mergeSort(arr, temp, mid+1, right)
        count += merge(arr, temp, left, mid+1, right)
    }

    return count
}

function merge(arr: number[], temp: number[], left: number,mid: number, right: number): number{
    let i=left, j=mid, k=left, count=0
    while(i<=mid-1 && j<=right){
        if(arr[i] <= arr[j])
            temp[k++] = arr[i++]
        else{
            temp[k++] = arr[j++]
            count += mid-i
        }
    }

    while(i <= mid-1)
        temp[k++] = arr[i++]
    while(j <= right)
        temp[k++] = arr[j++]

    for(i=left; i<=right; i++)
        arr[i] = temp[i]

    return count
}