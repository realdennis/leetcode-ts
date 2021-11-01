export {};

const findIndex = (
    nums: number[],
    lo: number,
    hi: number,
    fn: (val: number, idx: number) => number
): number => {
    while (lo <= hi) {
        const mi = Math.floor((lo + hi) / 2);

        if (fn(nums[mi], mi) === 0) return mi;

        if (fn(nums[mi], mi) < 0) {
            lo = mi + 1;
        } else {
            hi = mi - 1;
        }
    }
    return lo - 1;
};

function search(nums: number[], target: number): number {
    const N = nums.length;
    const maxIdx = findIndex(nums, 0, N - 1, (val, idx) => (val - nums[0] >= 0 ? -1 : 1));

    let targetIdx;
    if (target >= nums[0]) {
        targetIdx = findIndex(nums, 0, maxIdx, (val) => val - target);
    } else {
        targetIdx = findIndex(nums, maxIdx + 1, N - 1, (val) => val - target);
    }

    return nums[targetIdx] === target ? targetIdx : -1;
}
