function permute(nums: number[]): number[][] {
    const ret: number[][] = [];
    const backtracking = (nums: number[], level: number): void => {
        if (level === nums.length - 1) {
            ret.push([...nums]);
            return;
        }

        for (let i = level; i < nums.length; i++) {
            [nums[i], nums[level]] = [nums[level], nums[i]];
            backtracking(nums, level + 1);
            [nums[i], nums[level]] = [nums[level], nums[i]];
        }
    };
    backtracking(nums, 0);

    return ret;
}
