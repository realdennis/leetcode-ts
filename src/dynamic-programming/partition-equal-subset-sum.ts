const knapsacks = (A: number[], target: number): boolean => {
    const N = A.length;
    let dp = Array.from({ length: target + 1 }, () => false);
    dp[0] = true;

    for (let i = N - 1; i >= 0; i--) {
        const _dp = Array.from(dp);
        for (let j = target; j >= 0; j--) {
            // backward for de-dup
            if (_dp[j] === true && j + A[i] <= target) _dp[j + A[i]] = true;
        }
        dp = _dp;
        if (dp[target]) return true; // early return
    }
    return false;
};

function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((prev, cur) => prev + cur, 0);
    if (sum % 2 === 1) return false; // odd sum cannot be divided to two equal subset sum

    const target = sum / 2;

    return knapsacks(nums, target);
}
