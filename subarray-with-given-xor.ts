// https://www.interviewbit.com/problems/subarray-with-given-xor/

function subarrayWithGivenXor(A: number[], B: number): number {
    let count = 0;
    let xor = 0;
    let map = new Map<number, number>();
    map.set(0, 1);
    for(let i=0; i<A.length; i++){
        xor ^= A[i];
        if(map.get(xor^B)){
            count += map.get(xor^B) as number;
        }
        map.set(xor, (map.get(xor) || 0) + 1);
    }

    return count;
}