const permute = (nums: number[]): number[][] => {
    const N = nums.length; // boundary
    const ret: number[][] = [];
    const backtracking = (start: number): void => {
        // for this case we update the nums, instead of preRes
        if (start === N) {
            ret.push(Array.from(nums)); // using Array.from to hard copy
            return;
        }

        for (let i = start; i < N; i++) {
            // swap (i!==start) or not (i===start)
            [nums[i], nums[start]] = [nums[start], nums[i]];
            backtracking(start + 1);
            [nums[i], nums[start]] = [nums[start], nums[i]];
            // ^^ resume the change
        }
    };
    backtracking(0);
    return ret;
};
