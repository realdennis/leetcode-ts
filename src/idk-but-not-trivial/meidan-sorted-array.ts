function findMedianSortedArrays1(nums1: number[], nums2: number[]): number {
  nums1.length > nums2.length && ([nums1, nums2] = [nums2, nums1]);

  const N1 = nums1.length,
    N2 = nums2.length;

  const K = (N1 + N2) >> 1;

  let l = 0,
    r = N1; //

  while (l <= r) {
    let m1 = (r - l) >> (1 + l);
    let m2 = K - m1;

    const L1 = m1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[m1 - 1];
    const L2 = m2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[m2 - 1];
    const R1 = m1 === N1 ? Number.MAX_SAFE_INTEGER : nums1[m1];
    const R2 = m2 === N2 ? Number.MAX_SAFE_INTEGER : nums2[m2];

    if (L1 > R2) r = m1 - 1;
    else if (L2 > R1) l = m1 + 1;
    else
      return (N1 + N2) % 2
        ? Math.min(R1, R2)
        : (Math.max(L1, L2) + Math.min(R1, R2)) / 2;
  }
  return -1;
}
