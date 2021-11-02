function sortColors(nums: number[]): void {
    const N = nums.length;
    let r = 0,
        w = 0,
        b = N - 1;

    while (w <= b) {
        if (nums[w] === 0) {
            [nums[w], nums[r]] = [nums[r], nums[w]];
            r++;
            w++;
        } else if (nums[w] === 1) {
            w++;
        } else {
            [nums[w], nums[b]] = [nums[b], nums[w]];
            b--;
        }
    }
}
