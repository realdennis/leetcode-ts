/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const N = nums.length;
  let pos1 = 0;
  let pos0 = -1;

  while (pos1 < N) {
    if (nums[pos1] === 0) {
      pos0 = Math.max(pos0, pos1) + 1;
      while (pos0 < N && nums[pos0] === 0) pos0++;
      if (pos0 === N) break;
      [nums[pos1], nums[pos0]] = [nums[pos0], nums[pos1]];
    }
    pos1++;
  }
}
