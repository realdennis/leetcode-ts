/**
 Do not return anything, modify nums in-place instead.
 */

/**

1. In-place sol, make a reverse function which swap in-place, and 

eg.
    1,2,3,4,5,6,7      ---reverse(0,N-1)-->   7,6,5,4,3,2,1    ---reverse(0,k-1)-->  5,6,7,4,3,2,1 --reverse(k,N-1)--> 5,6,7,1,2,3,4
            ^   ^                                 ^                                        ^
           n-3  n-1                               2(k-1)                                   k
           
So what we do is
reverse(0,N-1)
reverse(0,K-1)
reverse(k,N-1)

2. reverse function implement by swapping lo/hi, and keep moving close

**/

function rotate(nums: number[], k: number): void {
    const N = nums.length;
    const K = k % N; // the fucking trap

    const reverse = (lo: number, hi: number): void => {
        // don't forget we need in-place
        while (lo < hi) {
            [nums[lo], nums[hi]] = [nums[hi], nums[lo]];
            lo++;
            hi--;
        }
    };

    reverse(0, N - 1);
    reverse(0, K - 1);
    reverse(K, N - 1);
}
