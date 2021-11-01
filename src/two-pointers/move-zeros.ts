/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const N = nums.length;

  let ptr1 = 0,
    ptr2 = 0;
  while (true) {
    while (ptr2 < N && nums[ptr2] === 0) ptr2++;
    if (ptr2 === N) break;

    if (ptr1 !== ptr2) {
      // prevent redundant swap
      [nums[ptr1], nums[ptr2]] = [nums[ptr2], nums[ptr1]]; // swap
    }
    ptr1++;
    ptr2++;
  }
}
