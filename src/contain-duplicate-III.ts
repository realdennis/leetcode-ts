// O(N);
function containsNearbyAlmostDuplicate(
  nums: number[],
  k: number,
  t: number
): boolean {
  if (k === 0) return false; // corner case

  const bucket: Map<number, number> = new Map();
  const getBucketKey = (num: number): number => Math.floor(num / (t + 1)); // prevent t === 0 case.

  const N = nums.length;

  const isCollision = (): boolean => {
    const cur = nums[r];
    const key = getBucketKey(cur);
    return (
      bucket.has(key) ||
      (bucket.has(key + 1) && bucket.get(key + 1) - cur <= t) ||
      (bucket.has(key - 1) && cur - bucket.get(key - 1) <= t)
    );
  };

  const isNotFull = (): boolean => r - l < k;
  const grow = (): void => {
    const cur = nums[r];
    const key = getBucketKey(cur);
    bucket.set(key, cur);
    r++;
  };
  const shrink = (): void => {
    const cur = nums[l];
    const key = getBucketKey(cur);
    bucket.delete(key);
    l++;
  };

  // O(N)
  let l = 0,
    r = 0;
  while (r < N) {
    if (isCollision()) return true;
    if (isNotFull()) {
      grow();
    } else {
      shrink();
    }
  }
  return false;
}
