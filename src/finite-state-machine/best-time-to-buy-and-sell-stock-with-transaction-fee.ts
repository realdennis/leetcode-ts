export {};
function maxProfit(prices: number[], fee: number): number {
    const N = prices.length;

    let hold = -prices[0];
    let release = Number.MIN_SAFE_INTEGER;
    let idle = 0;

    for (let i = 1; i < N; i++) {
        const lastHold = hold,
            lastRelease = release,
            lastIdle = idle;

        hold = Math.max(
            lastRelease - prices[i],
            lastIdle - prices[i],
            lastHold /*may not engage in multiple*/
        );
        release = lastHold + prices[i] - fee;
        idle = Math.max(lastRelease, lastIdle);
    }

    return Math.max(release, idle);
}
