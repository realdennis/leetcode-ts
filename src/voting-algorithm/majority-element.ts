function majorityElement(nums: number[]): number {
    /**
        Voting algorithm
        
        For initial, we can have assume first candidate (nums[0]) get the votes = 1 (means one vote)
        
        Then iteration, if there's another item (!==candidate) we decrease the votes, otherwise increase.
		
		And if the votes===0, we change the candidate.
        
        This algorithm could be proven that if there's a candidate has the least N/2 vote, it could not be elimate by other candidates.
        
    **/
    const N = nums.length;
    let candidate = nums[0],
        votes = 1;

    for (let i = 1; i < N; i++) {
        if (votes === 0) candidate = nums[i];

        votes += nums[i] === candidate ? 1 : -1;
    }

    return candidate;
}
