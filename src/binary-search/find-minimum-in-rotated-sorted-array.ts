export {};
const findIndex = (arr: number[], fn: (val: number, index: number) => number) => {
    let lo = 0,
        hi = arr.length - 1;
    while (lo <= hi) {
        const mi = Math.floor((lo + hi) / 2);
        if (fn(arr[mi], mi) === 0) return mi;
        if (fn(arr[mi], mi) < 0) lo = mi + 1;
        if (fn(arr[mi], mi) > 0) hi = mi - 1;
    }
    return lo - 1;
};

function findMin(nums: number[]): number {
    const maxIdx = findIndex(nums, (val: number, index: number): number => {
        if (val < nums[0]) return 1;
        else return -1;
    });

    return (maxIdx + 1) % nums.length;
}
