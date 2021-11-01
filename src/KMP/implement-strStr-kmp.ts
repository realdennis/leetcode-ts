const lpsBuilder = (pat: string): number[] => {
	const N = pat.length;
	const dp = Array.from({ length: N }, () => 0);
	let len = 0;
	for (let i = 1; i < N; i++) {
		// single character no prefix/suffix

		while (pat[i] !== pat[len] && len !== 0) len = dp[len - 1]; // refer the previous info
		if (pat[i] === pat[len]) len++; // each i only increase one time if match
		dp[i] = len;
	}
	return dp;
};

function strStr(haystack: string, needle: string): number {
	/**
     KMP with LPS
    **/

	const M = haystack.length;
	const N = needle.length;

	if (N === 0) return 0;
	if (M === 0) return -1;
	const lps = lpsBuilder(needle);

	let j = 0;
	for (let i = 0; i < M; i++) {
		while (haystack[i] !== needle[j] && j !== 0) j = lps[j - 1]; // refer the minimum adj dist
		if (haystack[i] === needle[j]) j++;

		if (j === N) return i - j + 1;
	}
	return -1;
}
