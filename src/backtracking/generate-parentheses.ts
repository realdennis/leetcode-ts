function generateParenthesis(n: number): string[] {
    const ret: string[] = [];
    const backtracking = (open: number = 0, close: number = 0, prevRes: string = ""): void => {
        if (prevRes.length === n * 2) {
            ret.push(prevRes);
            return;
        }
        if (open < n) {
            backtracking(open + 1, close, prevRes + "(");
        }
        if (close < open) {
            backtracking(open, close + 1, prevRes + ")");
        }
    };
    backtracking();

    return ret;
}
