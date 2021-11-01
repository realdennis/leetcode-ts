function combine(n: number, k: number): number[][] {
    const ans: number[][] = [];
    const partial: number[] = [];

    const helper = (startNum = 1): void => {
        if (partial.length === k) {
            ans.push([...partial]);
            return;
        }
        for (let i = startNum; i <= n; i++) {
            partial.push(i);
            helper(i + 1);
            partial.pop();
        }
    };

    helper();
    return ans;
}
