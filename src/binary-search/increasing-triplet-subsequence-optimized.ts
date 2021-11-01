export {};
// reduce the findIndex(binary search) to compare two variable
function increasingTriplet(nums: number[]): boolean {
  let small = Number.MAX_SAFE_INTEGER,
    big = Number.MAX_SAFE_INTEGER;

  for (const num of nums) {
    if (num > big) return true;

    if (num > small) big = num;
    else small = num;
  }

  return false;
}
