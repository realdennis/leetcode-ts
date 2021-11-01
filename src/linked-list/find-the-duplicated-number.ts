function findDuplicate(nums: number[]): number {
    let fast = nums[0],
        slow = nums[0];
    // assume we'll have the cycle
    do {
        fast = nums[nums[fast]];
        slow = nums[slow];
    } while (fast !== slow);
    // now slow and fast meets
    fast = nums[0];
    while (fast !== slow) {
        fast = nums[fast];
        slow = nums[slow];
    }

    return slow;
}
