function fourSumCount(
  A: number[],
  B: number[],
  C: number[],
  D: number[]
): number {
  // group {C,D}, collect their sum, n*n

  const map: Map<number, number> = new Map();
  for (const c of C) {
    for (const d of D) {
      const sum = c + d;
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }

  // group {A,B} to check if there's a pair sum, which -sum could match in map
  let ret = 0;
  for (const a of A) {
    for (const b of B) {
      const sum = a + b;
      if (map.has(-1 * sum)) ret += map.get(-1 * sum) || 0;
    }
  }
  return ret;
}
