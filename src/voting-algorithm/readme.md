# Summary of Voting-Algo

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