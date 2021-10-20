function merge(A: number[][]): number[][] {
	A.sort((prev, next) => prev[0] - next[0]); // greedy
	const ret: number[][] = [];

	for (const [start, end] of A) {
		if (ret.length === 0) {
			ret.push([start, end]);
			continue;
		}

		const [lastStart, lastEnd] = ret[ret.length - 1];
		if (start <= lastEnd) {
			ret.pop();
			ret.push([lastStart, Math.max(end, lastEnd)]); // update
		} else {
			ret.push([start, end]);
		}
	}
	return ret;
}
