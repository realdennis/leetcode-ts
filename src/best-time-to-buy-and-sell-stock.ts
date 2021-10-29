function maxProfit(prices: number[]): number {
  const N = prices.length;
  // [7,1,5,3,6,4] --> [-6,4,-2,3,-2]
  let ret = 0;
  for (let i = 0; i < N - 1; i++) {
    const profit = prices[i + 1] - prices[i];
    if (profit > 0) ret += profit;
  }
  return ret;
}
