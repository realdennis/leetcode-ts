function updateMatrix(mat: number[][]): number[][] {
    const M = mat.length;
    const N = mat[0].length;
    const dp = Array.from({ length: M }, () =>
        Array.from({ length: N }, () => Number.MAX_SAFE_INTEGER)
    );

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (mat[i][j] === 0) {
                dp[i][j] = 0;
            }

            if (i + 1 < M) dp[i + 1][j] = Math.min(dp[i][j] + 1, dp[i + 1][j]);
            if (j + 1 < N) dp[i][j + 1] = Math.min(dp[i][j] + 1, dp[i][j + 1]);
        }
    }

    for (let i = M - 1; i >= 0; i--) {
        for (let j = N - 1; j >= 0; j--) {
            if (i - 1 >= 0) dp[i - 1][j] = Math.min(dp[i][j] + 1, dp[i - 1][j]);
            if (j - 1 >= 0) dp[i][j - 1] = Math.min(dp[i][j] + 1, dp[i][j - 1]);
        }
    }
    return dp;
}
