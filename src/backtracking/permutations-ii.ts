function permuteUnique(nums: number[]): number[][] {
    nums.sort((prev, next) => prev - next);
    const N = nums.length;
    const ret: number[][] = [];
    const isDuplicated = (begin: number, end: number): boolean => {
        for (let i = begin; i < end; i++) {
            if (nums[i] === nums[end]) return true;
        }
        return false;
    };
    const backtracking = (pos: number = 0): void => {
        if (pos === N) {
            ret.push(Array.from(nums));
            return;
        }
        for (let i = pos; i < N; i++) {
            if (isDuplicated(pos, i)) continue;

            [nums[i], nums[pos]] = [nums[pos], nums[i]];
            backtracking(pos + 1);
            [nums[i], nums[pos]] = [nums[pos], nums[i]];
        }
    };

    backtracking();

    return ret;
}
