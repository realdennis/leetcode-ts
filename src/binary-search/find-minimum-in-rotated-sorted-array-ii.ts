export {};

const findIndex = (nums: number[], fn: (val: number, index: number) => number): number => {
    let lo = 0,
        hi = nums.length - 1;

    while (lo <= hi) {
        const mi = Math.floor((lo + hi) / 2);

        if (fn(nums[mi], mi) === 0) return mi;
        if (fn(nums[mi], mi) < 0) lo = mi + 1;
        else hi = mi - 1;
    }
    return lo - 1;
};

function findMin(nums: number[]): number {
    const first = nums[0];
    while (nums.length !== 0 && nums[0] === nums[nums.length - 1]) {
        nums.pop();
    }
    if (nums.length === 0) return first;

    const maxIdx = findIndex(nums, (val) => (val >= nums[0] ? -1 : 1));

    return nums[(maxIdx + 1) % nums.length];
}
