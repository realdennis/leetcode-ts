function subarraySum(nums: number[], k: number): number {
  // It's a prefix sum pattern prob

  let ret = 0;
  const N = nums.length;

  const prefix = Array.from({ length: N }, () => 0);
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += nums[i];
    prefix[i] = sum;
  }

  const map = new Map([[0, 1]]); // set(0, 1) is important! means we don't the one prefix sum + empty sum

  prefix.forEach((sum) => map.set(sum, (map.get(sum) || 0) + 1));

  for (let i = N - 1; i >= 0; i--) {
    const cur = prefix[i];
    map.set(cur, map.get(cur) - 1); // relax;
    ret += map.get(cur - k) || 0;
  }

  return ret;
}
