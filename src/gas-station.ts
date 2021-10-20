function canCompleteCircuit(gas: number[], cost: number[]): number {
	const N = gas.length;
	let ret = -1;

	const sumOfDiff = gas
		.map((val, idx) => val - cost[idx])
		.reduce((prev, next) => prev + next, 0);
	if (sumOfDiff < 0) return -1;

	const backtracking = (pos: number, counts: number, restGas: number): void => {
		if (restGas + gas[pos] < cost[pos]) return;
		if (counts === N) {
			ret = (pos + 1) % N;
			return;
		}
		backtracking((pos + 1) % N, counts + 1, restGas + gas[pos] - cost[pos]);
	};

	for (let i = 0; i < N; i++) {
		if (cost[i] > gas[i]) continue;
		if (ret !== -1) break;
		backtracking(i, 1, 0);
	}

	return ret;
}
