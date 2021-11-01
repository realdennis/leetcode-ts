function minSubArrayLen(target: number, nums: number[]): number {
    let ret = Number.MAX_SAFE_INTEGER;
    let l = 0,
        r = 0;

    let sum = 0;

    const isSmaller = (): boolean => sum < target;

    const grow = (): void => {
        const right = nums[r];
        sum += right;
        r++;
    };
    const shrink = (): void => {
        if (l === r) {
            l++;
            r++;
            sum = 0;
        } else {
            const left = nums[l];
            sum -= left;
            l++;
        }
    };
    const updateRet = () => {
        // check satisfied
        if (sum >= target) {
            const len = r - l; // now r is growing to next, so we don't plus 1
            ret = Math.min(ret, len);
        }
    };
    while (r <= nums.length) {
        if (isSmaller()) {
            if (r === nums.length) break;
            grow();
        } else {
            shrink();
        }
        updateRet();
    }

    return ret > nums.length ? 0 : ret;
}
