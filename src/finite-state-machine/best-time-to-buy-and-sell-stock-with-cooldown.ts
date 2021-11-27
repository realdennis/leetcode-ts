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

We can optimize space by keep previous(i-1) state

 */

// O(n) time, O(1) space, for O(1) space, check the `best-time-to-buy-and-sell-stock-with-cooldown-optimize`
function maxProfit(prices: number[]): number {
    let hold = Number.MIN_SAFE_INTEGER,
        release = Number.MIN_SAFE_INTEGER,
        idle = 0;

    for (const price of prices) {
        const _hold = Math.max(hold, idle - price);
        const _release = price + hold;
        const _idle = Math.max(release, idle);

        hold = _hold;
        release = _release;
        idle = _idle;
    }

    return Math.max(idle, release);
}
