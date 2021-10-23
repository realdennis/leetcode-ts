function countSubstrings(s: string): number {
  const N = s.length;
  const expandCheck = (idx: number): number => {
    let ret = 0;
    // check odd case
    let lo = idx,
      hi = idx;
    while (lo >= 0 && hi < N && s[lo] === s[hi]) {
      ret++;
      lo--;
      hi++;
    }
    // check even case
    lo = idx;
    hi = idx + 1;
    while (lo >= 0 && hi < N && s[lo] === s[hi]) {
      ret++;
      lo--;
      hi++;
    }

    return ret;
  };

  let ret = 0;
  for (let i = 0; i < N; i++) {
    ret += expandCheck(i);
  }
  return ret;
}
