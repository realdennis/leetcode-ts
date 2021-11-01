function maxSubArray(nums: number[]): number {
    const N = nums.length;
    let maxSum = 0;
    let ret = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < N; i++) {
        if (maxSum < 0) maxSum = 0;
        maxSum += nums[i];
        ret = Math.max(ret, maxSum);
    }
    return ret;
}
