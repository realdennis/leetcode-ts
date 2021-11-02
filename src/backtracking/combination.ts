const combine = (n: number, k: number): number[][] => {
    const ret: number[][] = [];

    const backtracking = (start: number, prevRes: number[]): void => {
        if (prevRes.length === k) {
            ret.push(Array.from(prevRes));
            return;
        }
        if (start > n) {
            return;
        }

        // pick or not pick

        // pick
        prevRes.push(start);
        backtracking(start + 1, prevRes);
        prevRes.pop(); // resume

        // not pick
        backtracking(start + 1, prevRes);
    };
    backtracking(1, []);
    return ret;
};
