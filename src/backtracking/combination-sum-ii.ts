export {};
function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((prev, next) => prev - next);
    const N = candidates.length;
    const ret: number[][] = [];

    const backtracking = (index: number, prevRes: number[], skip?: number): void => {
        const prevSum = prevRes.reduce((prev, next) => prev + next, 0);

        if (prevSum === target) {
            ret.push(Array.from(prevRes));
            return;
        }
        if (prevSum > target) {
            // don't care
            return;
        }
        if (index === N) {
            // boundary
            return;
        }
        const cur = candidates[index];

        // no choose
        // now we want to move forward but not duplicate as the above choose case
        // we need to skip
        backtracking(index + 1, prevRes, candidates[index]);

        // choose case, early return if skip case
        if (skip === cur) return;
        prevRes.push(cur);
        backtracking(index + 1, prevRes);
        prevRes.pop(); // resume
    };

    backtracking(0, []);

    return ret;
}
