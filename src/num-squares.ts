function numSquares(n: number): number {
  /**
   * The idea is using inner loop to check if we choose a sub-perfect square, what' the local optimal solution
   *
   * dp[i] = 1 + dp[i-j*j]
   *         ^ means we count one perfect square (j*j)
   *
   * Keep update the dp[i] to minimum nums, and don't forget the `i` could be the perfect square (eg. 4 = 4),
   * so we use a dummy dp[0] = 0 to handle this kind possible.
   */
  const dp = Array.from({ length: n + 1 }, () => Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j ** 2 <= i; j++) {
      dp[i] = Math.min(dp[i], 1 + dp[i - j ** 2]);
    }
  }

  return dp[n];
}
