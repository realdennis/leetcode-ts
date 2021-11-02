function numIslands(grid: string[][]): number {
    // modify the grid to zero as visited;
    let ret = 0;

    const M = grid.length;
    const N = grid[0].length;

    const backtracking = (i: number, j: number): void => {
        // boundary
        if (i < 0 || i >= M || j < 0 || j >= N) return;

        // we've visited or not island
        if (grid[i][j] !== "1") return;

        grid[i][j] = "0";

        backtracking(i + 1, j);
        backtracking(i, j + 1);
        backtracking(i - 1, j);
        backtracking(i, j - 1);
    };

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === "1") ret++;
            backtracking(i, j);
        }
    }
    return ret;
}
