function maxAbsoluteSum(nums: number[]): number {
  /**
      
      Find the max sum and min sum, why? cause the there's a case
          max sum -> 21
          min sum -> -27
      
      Collect the positive max and negative max (we'll do Math.abs later).
      
      Let's reduce to the Kadane(max subarray sum) prob
      
      **/
  const N = nums.length;
  let maxSum = 0;
  let minSum = 0;
  let ret = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < N; i++) {
    // Kadane's algo for max
    maxSum = Math.max(nums[i], maxSum + nums[i]);
    // Kadane's algo for negative max
    minSum = Math.min(nums[i], minSum + nums[i]);

    ret = Math.max(ret, maxSum, Math.abs(minSum));
  }

  return ret;
}
