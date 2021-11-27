export {};
function maxProfit(prices: number[], fee: number): number {
    let hold = Number.MIN_SAFE_INTEGER;
    let release = 0;

    for (const price of prices) {
        const _hold = Math.max(hold, release - price);
        const _release = Math.max(release, price + hold - fee);

        hold = _hold;
        release = _release;
    }

    return release;
}
