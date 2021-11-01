function canJump(nums: number[]): boolean {
    /**
     * Keep updating the end
     */
    const N = nums.length;
    let end = N - 1; // last index;

    let cur = N - 2;
    while (cur >= 0) {
        if (cur + nums[cur] >= end) end = cur;
        cur--;
    }
    return 0 + nums[0] >= end;
}
