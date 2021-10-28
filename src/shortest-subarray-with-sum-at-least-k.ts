function shortestSubarray(nums: number[], k: number): number {
  nums.unshift(0); // in case we want to collect the pSum, add a dummy zero let us easily track the prefix sum diff

  const N = nums.length;
  let ret = N + 1;

  // initial prefix sum table, O(n)
  const prefix = Array.from({ length: N }, () => 0);
  prefix.reduce((prev, next, idx) => (prefix[idx] = prev + next), 0);

  // do the monotonic queue (increasing)
  // calc the smallest diff if while i>j, p[i]-p[j] >= k
  const queue = [];
  for (let i = 0; i < N; i++) {
    // monotonic increasing
    while (queue.length !== 0 && prefix[queue[queue.length - 1]] > prefix[i])
      queue.pop();
    // why increasing? since we don't care the case j if prefix[j] > prefix[k] (j<k)

    while (queue.length !== 0 && prefix[i] - prefix[queue[0]] >= k) {
      const firstIdx = queue.shift();
      ret = Math.min(ret, i - firstIdx);
    }
    queue.push(i);
  }

  return ret > N ? -1 : ret;
}
