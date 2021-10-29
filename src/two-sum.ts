function twoSum(nums: number[], target: number): number[] {
  const N = nums.length;
  const map: Map<number, number> = new Map(nums.map((val, idx) => [val, idx])); // map array to entries

  for (let i = 0; i < N; i++) {
    const t = target - nums[i];
    if (map.has(t) && map.get(t) !== i) return [i, map.get(t)];
  }
  return [];
}
