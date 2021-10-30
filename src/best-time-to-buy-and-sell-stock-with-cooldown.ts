export {};

/**
For each day we have three different multi universe, which we 
    1. just sell in this day
    2. just buy in this day
    3. just do noop this day

So how come we deal with each relation? 

As the desc, we are 
    1. not allowed to buy after we sell (cooldown)
    2. not allowed hold multiple shares


So now we had three state:
    1. HOLD -> you had one share in your hand
    2. RELEASE -> you just sell that share (so I mean you need to at hold state in previous day)
    3. IDLE -> you do nothing, and you don't have the share in your hand.

The state machine be like

    HOLD[i] = IDLE[i-1] - prices[i] vs HOLD[i-1]; // best buy point

    RELEASE[i] = HOLD[i-1] + prices[i];

    IDLE[i] = IDLE[i-1] vs RELEASE[i-1]

 */

// O(n) time, O(n) space, for O(1) space, check the `best-time-to-buy-and-sell-stock-with-cooldown-optimize`
function maxProfit(prices: number[]): number {
  const N = prices.length;

  const hold = Array.from({ length: N }, () => 0);
  const release = Array.from({ length: N }, () => 0);
  const idle = Array.from({ length: N }, () => 0);

  if (N < 2) return 0;

  hold[0] = -prices[0];
  release[0] = Number.MIN_SAFE_INTEGER;
  idle[0] = 0;

  for (let i = 1; i < N; i++) {
    hold[i] = Math.max(hold[i - 1], idle[i - 1] - prices[i]);
    release[i] = hold[i - 1] + prices[i];
    idle[i] = Math.max(idle[i - 1], release[i - 1]);
  }

  return Math.max(release[N - 1], idle[N - 1]);
}
