function longestIncreasingPath(matrix: number[][]): number {
  const M = matrix.length,
    N = matrix[0].length;
  const dp = Array.from({ length: M }, () =>
    Array.from({ length: N }, () => 0)
  );
  let ret = 0;

  const dfs = (
    i: number,
    j: number,
    prev: number = Number.MIN_SAFE_INTEGER
  ): number => {
    if (i < 0 || j < 0 || i >= M || j >= N) return 0; // boundary

    if (matrix[i][j] <= prev) return 0; // not satisfied
    if (dp[i][j] !== 0) return dp[i][j];

    dp[i][j] =
      1 +
      Math.max(
        dfs(i + 1, j, matrix[i][j]),
        dfs(i - 1, j, matrix[i][j]),
        dfs(i, j + 1, matrix[i][j]),
        dfs(i, j - 1, matrix[i][j])
      );
    return dp[i][j];
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      ret = Math.max(ret, dfs(i, j));
    }
  }
  return ret;
}
