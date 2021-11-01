export {};
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const findIndex = (N: number, fn: (val: number) => number): number => {
  let lo = 1,
    hi = N;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (fn(mid) > 0) hi = mid - 1;
    else lo = mid + 1;
  }

  return lo - 1;
};
function solution(isBadVersion: (version: number) => boolean) {
  return function (n: number): number {
    return findIndex(n, (val) => (isBadVersion(val) ? 1 : -1)) + 1;
  };
}
