function firstMissingPositive(nums: number[]): number {
    /**
     * array index as the hash map's key
     */
    const N = nums.length;

    const swap = (pos1: number, pos2: number): void => {
        [nums[pos1], nums[pos2]] = [nums[pos2], nums[pos1]];
    };

    // Put the value in 1~N it's value-1 index
    // Notice we need to use while loop
    for (let i = 0; i < N; i++) {
        while (nums[i] >= 1 && nums[i] < N && nums[i] !== nums[nums[i] - 1]) {
            swap(i, nums[i] - 1);
        }
    }
    for (let i = 0; i < N; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }
    return N + 1;
}
