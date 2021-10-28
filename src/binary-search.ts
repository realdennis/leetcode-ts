export {};
// Binary search, O(log N)
const findIndex = (
  arr: number[],
  fn: (val: number, idx: number) => number
): number => {
  const N = arr.length;

  let lo = 0,
    hi = N - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (fn(arr[mid], mid) === 0) return mid;

    if (fn(arr[mid], mid) > 0) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return -1;
};
function search(nums: number[], target: number): number {
  return findIndex(nums, (val) => val - target);
}
