export {};
function combinationSum(A: number[], target: number): number[][] {
    const N = A.length;
    const ret: number[][] = [];

    const backtracking = (pos: number = 0, prevRes: number[] = []): void => {
        const sum = prevRes.reduce((prev, next) => prev + next, 0);
        if (sum > target) {
            // prune
            return;
        }
        if (sum === target) {
            ret.push(Array.from(prevRes));
            return;
        }
        if (pos === N) {
            // boundary
            return;
        }

        // choose case
        prevRes.push(A[pos]);
        backtracking(pos, prevRes);
        prevRes.pop();

        // don't choose case
        backtracking(pos + 1, prevRes);
    };

    backtracking(0);

    return ret;
}
