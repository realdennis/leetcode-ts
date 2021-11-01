export {};

// O(n) time, O(1) space
function maxProfit(prices: number[]): number {
  const N = prices.length;

  let hold = -prices[0];
  let release = Number.MIN_SAFE_INTEGER;
  let idle = 0;

  if (N < 2) return 0;

  for (let i = 1; i < N; i++) {
    const lastHold = hold;
    const lastRelease = release;
    const lastIdle = idle;
    hold = Math.max(lastHold, lastIdle - prices[i]);
    release = lastHold + prices[i];
    idle = Math.max(lastIdle, lastRelease);
  }

  return Math.max(release, idle);
}
