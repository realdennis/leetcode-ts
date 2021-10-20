const pat = "AAABA";

const lps = Array.from({ length: pat.length }, () => 0);

for (let i = 0; i < pat.length; i++) {
	const target = pat.substring(0, i + 1);
	const T = target.length;
	for (let len = 1; len < T; len++) {
		if (target.substring(0, len) === target.substring(T - len, T + 1))
			lps[i] = len;
	}
}
console.log(lps);
