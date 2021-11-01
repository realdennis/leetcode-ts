export {};
const findIndex = (
  A: number[],
  fn: (val: number, idx: number) => number
): number => {
  const N = A.length;

  let lo = 0,
    hi = N - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (fn(A[mid], mid) === 0) return mid; // hit
    if (fn(A[mid], mid) < 0) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return lo - 1;
};

function searchInsert(nums: number[], target: number): number {
  const idx = findIndex(nums, (val) => val - target);

  return nums[idx] === target ? idx : idx + 1;
}
