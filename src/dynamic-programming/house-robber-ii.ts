function rob(nums: number[]): number {
    /**
     * One pass loop, constant space
     */
    const N = nums.length;
    if (N <= 3) return Math.max(...nums); // we really don't care

    let next2 = nums[N - 1];
    let next1 = Math.max(nums[N - 1], nums[N - 2]);

    let nnext2 = nums[N - 2];
    let nnext1 = Math.max(nums[N - 2], nums[N - 3]);

    for (let i = N - 3; i >= 1; i--) {
        const val = Math.max(nums[i] + next2, next1);
        next2 = next1;
        next1 = val;

        const vval = Math.max(nums[i - 1] + nnext2, nnext1);
        nnext2 = nnext1;
        nnext1 = vval;
    }
    return Math.max(next1, nnext1);
}
