function longestValidParentheses(s: string): number {
	const N = s.length;
	const legal = Array.from({ length: N }, () => false);
	const stack: number[] = []; // keep the index of "("
	for (let i = 0; i < N; i++) {
		const cur = s[i];
		if (cur === "(") {
			stack.push(i);
		} else {
			if (stack.length === 0) continue;
			const leftIdx = stack.pop();
			legal[leftIdx] = true;
			legal[i] = true;
		}
	}
	let maxLength = 0;
	legal.reduce(
		(acc, next) =>
			next ? (maxLength = Math.max(maxLength, acc++)) : (acc = 0),
		0
	);
	return maxLength;
}
