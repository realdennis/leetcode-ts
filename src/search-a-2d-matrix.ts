export {};

const findIndex = (
  arr: number[],
  compareFn: (val: number) => number
): number => {
  // binary search with compareFn
  // O(log n)

  const N = arr.length;
  let lo = 0,
    hi = N - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const val = arr[mid];

    if (compareFn(val) === 0) return mid;

    if (compareFn(val) > 0) hi = mid - 1;
    else lo = mid + 1;
  }

  return lo - 1;
};
function searchMatrix(matrix: number[][], target: number): boolean {
  // search the row start to find the close small or equal value's index check which row

  const rowIdx = findIndex(
    matrix.map((row) => row[0]),
    (val) => (val > target ? 1 : -1)
  );
  if (rowIdx === -1) return false;

  const colIdx = findIndex(matrix[rowIdx], (val) => val - target);

  return matrix[rowIdx][colIdx] === target;
  // search the specific row
}
