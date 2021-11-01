function subsetXORSum(nums: number[]): number {
    const N = nums.length;
    const sets: number[][] = [];

    const backtracking = (start = 0, prevRes: number[] = []): void => {
        if (start === N) {
            prevRes.length !== 0 && sets.push([...prevRes]);
            return;
        }
        // includes nums[start] set
        prevRes.push(nums[start]);
        backtracking(start + 1, prevRes);
        prevRes.pop();

        // excludes nums[start] set
        backtracking(start + 1, prevRes);
    };
    backtracking();

    return sets
        .map((set) => set.reduce((prev, next) => prev ^ next, 0))
        .reduce((prev, next) => prev + next, 0);
}
