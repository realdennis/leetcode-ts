function canPartition(nums: number[]): boolean {
  /**
          
          It's the 0/1 knapsacks (coin change) prob, it you treat it as find the combination of sum/2
          
    **/
  const N = nums.length;
  const sum = nums.reduce((prev, next) => prev + next, 0);
  if (sum % 2 === 1) return false;
  const target = sum / 2;

  // 2-d dp table compress
  let dp = Array.from({ length: target + 1 }, () => false);
  let dpNew = Array.from({ length: target + 1 }, () => false);
  dp[nums[N - 1]] = true;
  for (let i = N - 2; i >= 0; i--) {
    for (let j = 0; j <= target; j++) {
      dpNew[j] = dp[j] || (j >= nums[i] && dp[j - nums[i]]);
    }
    dp = Array.from(dpNew);
  }

  return dp[target];
}
