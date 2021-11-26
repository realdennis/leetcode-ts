# Summary of Voting-Algo
Boyer-Moore Majority Vote algorithm

## Prob pattern
1. Majority element
2. Highest Votes candidates greater than one third of all

## Thinking process
We can keep a (candidate/votes) state, to increase if meet the same candidate, otherwise decrease & replace if 0.

## Pseudocode implementation
1. Replace if previous candidate lose the authority
2. Accumulate votes

```typescript
let cand = -1, // initialize cand
    vote = 0; // initialize the current cand votes

for(const num of nums) {
    // 1. replace if we can
    if(vote === 0) {
        cand = num;
        // vote = 1;
        // continue; --> these two line is for early continue, you can also do the accumulate
    }

    // 2. accumulate the votes
    if(cand === num) {
        vote ++;
    }else {
        vote --;
    }
}
```

## One-third case (majority-element-ii)
Since we wanna find the candidate's `vote > Math.floor(n/3)`, there're **2 potential candidates** could meet it (no possibility for 3 cands, you can rethink about it).

So we keep `cand1/vote1` & `cand2/vote2` and yes! still the same process.

1. Replace the zero vote candidate (replace the candidate now lose authority)
2. Accumulate
```typescript
 for (const num of nums) {
        // replace
        if (vote1 === 0 && num !== cand2) { // ---> yes we need this mutual condition
            cand1 = num;
            vote1 = 1;
            continue;
        } else if (vote2 === 0 && num !== cand1) { // --> since we don't want cand1 is same as cand2
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
```

3. We need to re-analysis the vote of these two candidates, above process is only to pickup the tier two potential candidates (the top 2 highest votes candidate doesn't mean they all `vote > Math.floor(n/3)` ), but we need to know the specific votes.

4. Yes, so now we can filter the potential candidate whiose vote is not greater `Math.floor(n/3)`.


Note: 
You might think "Why top 2 highest vote candidates" doesn't meaning all's vote greater than one-third of all.
Counterexample: [1,2,3,3,3] -> you can say top 2 is `[2,3]` (or `[1,3]`) but only the candidate `3` meet the condition.