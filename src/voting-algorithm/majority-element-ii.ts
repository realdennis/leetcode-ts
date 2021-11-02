export {};
function majorityElement(nums: number[]): number[] {
    let cand1 = 0,
        cand2 = 0,
        vote1 = 0,
        vote2 = 0;

    for (const num of nums) {
        if (num === cand1) vote1++;
        else if (num === cand2) vote2++;
        else if (vote1 === 0) {
            cand1 = num;
            vote1 = 1;
        } else if (vote2 === 0) {
            cand2 = num;
            vote2 = 1;
        } else {
            vote1--;
            vote2--;
        }
    }
    // now below process pick the 2 majority candidates, let's re counts their vote
    vote1 = 0;
    vote2 = 0;
    for (const num of nums) {
        if (cand1 === num) vote1++;
        else if (cand2 === num) vote2++;
    }
    return [
        [cand1, vote1],
        [cand2, vote2],
    ]
        .filter((entry) => entry[1] > Math.floor(nums.length / 3))
        .map((entry) => entry[0]);
}
