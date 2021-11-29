function coinChange(coins: number[], amount: number): number {
    /**
        classic dp prob, we can let dp[A] means the sub optimal solution we use coins to deal with amount = A

        dp[i] = Math.min(dp[i-coins[j]])

        Note: 
            1. The input `coins` might not increasing... please consider sort it first
            2. If amount is 0, ans = 0
    **/
    coins.sort((prev, next) => prev - next);
    let dp = Array.from({ length: amount + 1 }, () => Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin > i) break;
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}
