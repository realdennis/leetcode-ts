function majorityElement(nums: number[]): number {
    let vote = 0,
        cand = -1;
    for (const num of nums) {
        // replace
        if (vote === 0) {
            cand = num;
        }

        // accumulate
        if (cand === num) {
            vote++;
        } else {
            vote--;
        }
    }
    return cand;
}
