function getMaxLen(nums: number[]): number {
  // Kadane's algo

  const N = nums.length;

  let lp = 0,
    rp = 0; // left product, right product

  let ll = 0,
    rl = 0; // left length, right length;
  let ret = 0;

  const sign = (num: number): number => (num === 0 ? 0 : num > 0 ? 1 : -1); // calculate sign number only, prevent overflow
  for (let i = 0; i < N; i++) {
    if (lp === 0) {
      lp = 1;
      ll = 0;
    }
    if (rp === 0) {
      rp = 1;
      rl = 0;
    }
    lp *= sign(nums[i]);
    ll++;

    rp *= sign(nums[N - i - 1]);
    rl++;

    ret = Math.max(
      ret,
      lp > 0 ? ll : Number.MIN_SAFE_INTEGER,
      rp > 0 ? rl : Number.MIN_SAFE_INTEGER
    );
  }
  return ret;
}
