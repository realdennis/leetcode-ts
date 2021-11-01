export {};

const findIndex = (arr: number[], fn: (val: number, index: number) => number): number => {
    let lo = 0,
        hi = arr.length;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);

        if (fn(arr[mid], mid) === 0) return mid;
        if (fn(arr[mid], mid) < 0) lo = mid + 1;
        else hi = mid - 1;
    }
    return lo - 1;
};

function search(nums: number[], target: number): boolean {
    if (nums[nums.length - 1] === target) return true;
    while (nums[0] === nums[nums.length - 1]) {
        nums.pop();
    }
    // [4,4,4,5]
    const maxIdx = findIndex(nums, (val: number, index: number): number => {
        if (val < nums[0]) {
            return 1;
        } else {
            return -1;
        }
    });

    nums = [...nums.slice(maxIdx + 1), ...nums.slice(0, maxIdx + 1)];

    const targetIdx = findIndex(nums, (val) => val - target);
    return nums[targetIdx] === target;
}
