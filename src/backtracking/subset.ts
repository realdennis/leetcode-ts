function subsets(nums: number[]): number[][] {
    const N = nums.length;
    const ret: number[][] = [];

    const backtracking = (start = 0, prevRes: number[] = []): void => {
        if (start === N) {
            ret.push(Array.from(prevRes));
            return;
        }
        // choose
        prevRes.push(nums[start]);
        backtracking(start + 1, prevRes);
        prevRes.pop();

        backtracking(start + 1, prevRes);

        // not choose
    };

    backtracking();

    return ret;
}
