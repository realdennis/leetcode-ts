function uniquePathsWithObstacles(G: number[][]): number {
	const M = G.length;
	const N = G[0].length;

	if (G[M - 1][N - 1] === 1) return 0; // corner case, obstacle in the end

	const DP = Array.from({ length: M }, () =>
		Array.from({ length: N }, () => Number.MAX_SAFE_INTEGER)
	);
	DP[M - 1][N - 1] = 1;

	for (let i = 0; i < M; i++) {
		for (let j = 0; j < N; j++) {
			if (G[i][j] === 1) DP[i][j] = 0;
		}
	}

	for (let i = M - 2; i >= 0; i--) {
		DP[i][N - 1] = G[i][N - 1] === 1 ? 0 : DP[i + 1][N - 1];
	}
	for (let j = N - 2; j >= 0; j--) {
		DP[M - 1][j] = G[M - 1][j] === 1 ? 0 : DP[M - 1][j + 1];
	}

	for (let i = M - 2; i >= 0; i--) {
		for (let j = N - 2; j >= 0; j--) {
			if (G[i][j] === 1) {
				continue; // we don't want to update the obstacle
			}
			DP[i][j] = DP[i + 1][j] + DP[i][j + 1];
		}
	}
	return DP[0][0];
}
