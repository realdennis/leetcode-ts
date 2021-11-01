function containsNearbyDuplicate(nums: number[], k: number): boolean {
    // So now we're trying to slide our k-width window to check if there's a collision

    if (k === 0) return false; // corner case

    const set: Set<number> = new Set();

    const N = nums.length;

    let l = 0,
        r = 0;
    const collision = (): boolean => set.has(nums[r]);

    const fullWidth = (): boolean => r - l === k;

    const shrink = (): void => {
        set.delete(nums[l]);
        l++;
    };
    const grow = (): void => {
        set.add(nums[r]);
        r++;
    };

    while (r < N) {
        if (collision()) return true;

        if (fullWidth()) {
            shrink();
        } else {
            grow();
        }
    }
    return false;
}
