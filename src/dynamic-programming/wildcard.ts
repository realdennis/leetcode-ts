export {};
function isMatch(s: string, p: string): boolean {
  const _isMatch = _.memoize(
    (ptrS: number, ptrP: number): boolean => {
      const isStar = (): boolean => p[ptrP] === "*";
      const isLocalMatch = (): boolean =>
        s[ptrS] === p[ptrP] || p[ptrP] === "?";

      if (ptrS === s.length) {
        while (ptrP !== p.length) {
          if (!isStar()) return false;
          ptrP++;
        }
        return true;
      }
      if (ptrP === p.length) return false;

      if (isStar()) return _isMatch(ptrS + 1, ptrP) || _isMatch(ptrS, ptrP + 1);
      //  keep *            vs  treat * as match empty
      else if (isLocalMatch()) return _isMatch(ptrS + 1, ptrP + 1); // simple normal case

      return false;
    },
    (...args: number[]) => JSON.stringify(args)
  ); // memorize

  return _isMatch(0, 0);
}
