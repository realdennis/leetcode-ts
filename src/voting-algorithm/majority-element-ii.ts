export {};
function majorityElement(nums: number[]): number[] {
    const N = nums.length;

    let cand1 = -1,
        vote1 = 0,
        cand2 = -1,
        vote2 = 0;

    for (const num of nums) {
        // replace
        if (vote1 === 0 && num !== cand2) {
            cand1 = num;
            vote1 = 1;
            continue;
        } else if (vote2 === 0 && num !== cand1) {
            cand2 = num;
            vote2 = 1;
            continue;
        }

        // accumulate (increment or decrement)
        if (cand1 === num) {
            vote1++;
        } else if (cand2 === num) {
            vote2++;
        } else {
            vote1--;
            vote2--;
        }
    }

    vote1 = 0;
    vote2 = 0;

    // re-analysis
    for (const num of nums) {
        if (num === cand1) vote1++;
        else if (num === cand2) vote2++;
    }

    return [
        [cand1, vote1],
        [cand2, vote2],
    ]
        .filter(([_, vote]) => vote > Math.floor(N / 3))
        .map(([cand, _]) => cand);
}
