function productExceptSelf(nums: number[]): number[] {
    const N = nums.length;

    const ret = Array.from({ length: N }, () => 1);

    let left = 1;
    let right = 1;
    for (let i = 0; i < N; i++) {
        left *= i === 0 ? 1 : nums[i - 1];
        right *= i === 0 ? 1 : nums[N - i];
        ret[i] *= left;
        ret[N - i - 1] *= right;
    }
    return ret;
}
