/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let pos1 = m - 1,
    pos2 = n - 1,
    pos3 = nums1.length - 1;

  while (pos3 >= 0) {
    if (pos1 < 0) {
      nums1[pos3] = nums2[pos2];
      pos2--;
      pos3--;
      continue;
    }
    if (pos2 < 0) {
      nums1[pos3] = nums1[pos1];
      pos1--;
      pos3--;
      continue;
    }

    if (nums1[pos1] > nums2[pos2]) {
      nums1[pos3] = nums1[pos1];
      pos1--;
      pos3--;
    } else {
      nums1[pos3] = nums2[pos2];
      pos2--;
      pos3--;
    }
  }
}
