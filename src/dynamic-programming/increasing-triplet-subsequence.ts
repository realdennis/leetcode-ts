function increasingTriplet(nums: number[]): boolean {
    const findIndex = (arr: number[], compareFn: (val: number) => number): number => {
        const N = arr.length;

        let lo = 0,
            hi = N - 1;
        while (lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);

            if (compareFn(arr[mid]) === 0) return mid;

            if (compareFn(arr[mid]) < 0) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return lo - 1;
    };

    const subs = [];
    for (const num of nums) {
        if (subs.length == 0 || subs[subs.length - 1] < num) {
            subs.push(num);
            if (subs.length === 3) return true;
        } else {
            const idx = findIndex(subs, (val) => (val < num ? -1 : 1));
            subs[idx + 1] = num;
        }
    }

    return false;
}
