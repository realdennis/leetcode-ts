function largestOddNumber(num: string): string {
	const N = num.length;
	for (let i = N - 1; i >= 0; i--) {
		if (Number(num[i]) % 2 === 1) return num.substring(0, i + 1);
	}
	return "";
}
