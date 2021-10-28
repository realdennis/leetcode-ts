function lengthOfLongestSubstring(s: string): number {
  const N = s.length;
  let ret = 0;

  let l = 0,
    r = 0;

  const set: Set<string> = new Set();

  const isLegal = (): boolean => !set.has(s[r]);

  const grow = (): void => {
    set.add(s[r]);
    r++;
  };
  const update = (): void => {
    ret = Math.max(ret, r - l);
  };
  const shrink = (): void => {
    set.delete(s[l]);
    l++;
  };
  while (r < N) {
    if (isLegal()) {
      grow();
      update();
    } else {
      shrink();
    }
  }
  return ret;
}
