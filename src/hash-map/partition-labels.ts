function partitionLabels(s: string): number[] {
  const N = s.length;

  const map: Map<string, number> = new Map(); // collect the last index;

  for (let i = 0; i < N; i++) {
    const ch = s[i];
    map.set(ch, i); // keep update the last index;
  }

  const ret: number[] = []; // end index
  let localEnd = -1;
  let prevEnd = -1;
  for (let i = 0; i < N; i++) {
    const ch = s[i];
    const lastIdx = map.get(ch)!;
    localEnd = Math.max(localEnd, lastIdx);
    if (i === localEnd) {
      ret.push(i - prevEnd);
      prevEnd = i;
    }
  }
  return ret;
}
