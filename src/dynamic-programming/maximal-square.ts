function maximalSquare(matrix: string[][]): number {
    const grid: number[][] = matrix.map((row) => row.map((item) => Number(item)));
    let ret = 0;

    const M = grid.length;
    const N = grid[0].length;
    for (let i = 0; i < M; i++) {
        if (grid[i][0] === 1) ret = 1;
    }
    for (let j = 0; j < N; j++) {
        if (grid[0][j] === 1) ret = 1;
    }
    for (let i = 1; i < M; i++) {
        for (let j = 1; j < N; j++) {
            if (grid[i][j] === 0) continue;
            grid[i][j] = 1 + Math.min(grid[i - 1][j], grid[i][j - 1], grid[i - 1][j - 1]);
            ret = Math.max(grid[i][j] ** 2, ret);
        }
    }
    return ret;
}
