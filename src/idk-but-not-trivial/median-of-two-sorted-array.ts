function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const getKth = (A: number[], B: number[], k: number): number => {
        if (A.length === 0) return B[k];
        if (B.length === 0) return A[k];

        const ia = Math.floor(A.length / 2);
        const ib = Math.floor(B.length / 2);

        const ma = A[ia];
        const mb = B[ib];

        if (ia + ib < k) {
            if (ma > mb) return getKth(A, B.slice(ib + 1), k - ib - 1);
            else return getKth(A.slice(ia + 1), B, k - ia - 1);
        } else {
            if (ma > mb) return getKth(A.slice(0, ia), B, k);
            else return getKth(A, B.slice(0, ib), k);
        }
    };

    const l = nums1.length + nums2.length;
    if (l % 2 === 1) return getKth(nums1, nums2, Math.floor(l / 2));
    else return (getKth(nums1, nums2, l / 2) + getKth(nums1, nums2, l / 2 - 1)) / 2;
}
