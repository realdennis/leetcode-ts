function longestPrefix(s: string): string {
    /**
        It's the longest prefix suffix question
    **/
    const N = s.length;
    const dp = Array.from({ length: N }, () => 0);
    let len = 0;
    for (let i = 1; i < N; i++) {
        while (s[len] !== s[i] && len !== 0) len = dp[len - 1];
        if (s[len] === s[i]) {
            len++;
        }
        dp[i] = len;
    }
    return s.substring(0, dp[N - 1]);
}
