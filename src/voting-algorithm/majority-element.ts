function majorityElement(nums: number[]): number {
    /**
        Voting algorithm
        
        For initial, we can have assume candidate is 0, and vote = 0. (0 is not the input, so it'll be replace)
        
        Then iteration, if there's another item (!==candidate) we decrease the votes, otherwise increase.
		
		And if the votes===0, we change the candidate.
        
        This algorithm could be proven that if there's a candidate has the least N/2 vote, it could not be elimate by other candidates.
        
    **/
    let candidate = 0,
        vote = 0;

    for (const num of nums) {
        if (num === candidate) {
            vote++;
        } else if (vote === 0) {
            candidate = num;
            vote = 1;
        } else {
            vote--;
        }
    }

    return candidate;
}
