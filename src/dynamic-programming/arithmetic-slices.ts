function numberOfArithmeticSlices(nums: number[]): number {
  const N = nums.length;
  const dp = Array.from({ length: N }, () => 0);
  for (let i = 1; i < N - 1; i++) {
    if (nums[i] - nums[i - 1] === nums[i + 1] - nums[i]) {
      dp[i] = dp[i - 1] + 1;
    }
  }
  return dp.reduce((prev, next) => prev + next, 0);
}

/**
// space optimize
function numberOfArithmeticSlices(nums: number[]): number {
  const N = nums.length;

  let acc = 0;
  let ret = 0;
  for (let i = 1; i < N - 1; i++) {
    let current = 0;
    if (nums[i] - nums[i - 1] === nums[i + 1] - nums[i]) {
      acc++;
    } else {
      acc = 0;
    }
    ret += acc;
  }
  return ret;
}
*/
