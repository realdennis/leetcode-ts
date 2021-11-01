function longestCommonSubsequence(text1: string, text2: string): number {
    const M = text1.length;
    const N = text2.length;

    const dp = Array.from({ length: M + 1 }, () => Array.from({ length: N + 1 }, () => 0));

    for (let i = M - 1; i >= 0; i--) {
        for (let j = N - 1; j >= 0; j--) {
            dp[i][j] = Math.max(
                dp[i + 1][j], // ignore text1[i]
                dp[i][j + 1], // ignore text2[j]
                text1[i] === text2[j] ? 1 + dp[i + 1][j + 1] : Number.MIN_SAFE_INTEGER // potential candidate
            );
        }
    }

    return dp[0][0];
}
