function maxProduct(nums: number[]): number {
  // kadane's algo
  const N = nums.length;
  let lp = 0,
    rp = 0; // left product & right product

  let ret = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < N; i++) {
    if (lp === 0) lp = 1;
    if (rp === 0) rp = 1;

    lp *= nums[i];
    rp *= nums[N - i - 1];
    ret = Math.max(ret, lp, rp);
  }
  return ret;
}
