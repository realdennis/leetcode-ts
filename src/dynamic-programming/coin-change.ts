function coinChange(coins: number[], amount: number): number {
  /**
        classic dp prob, we can let dp[A] means the sub optimal solution we use coins to deal with amount = A

        dp[i] = Math.min(dp[i-coins[j]])

        Note: 
            1. The input `coins` might not increasing... please consider sort it first
            2. If amount is 0, ans = 0
    **/
  coins.sort((prev, next) => prev - next);

  const dp = Array.from({ length: amount + 1 }, () => Number.MAX_SAFE_INTEGER);

  // initial dp
  dp[0] = 0;
  for (const coin of coins) dp[coin] = 1;

  for (let i = 1; i <= amount; i++) {
    if (dp[i] === 1) continue;
    for (const coin of coins) {
      if (coin > i) break; // don't care
      if (
        dp[coin] !== Number.MAX_SAFE_INTEGER &&
        dp[i - coin] !== Number.MAX_SAFE_INTEGER
      )
        dp[i] = Math.min(dp[i], dp[coin] + dp[i - coin]); // keep compare find min of each local optimal solution
    }
  }
  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
}
