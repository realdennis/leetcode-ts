# Summary of Prefix Sum

## Patterns

Prob descr wanna get the subarray sum, yes, somehow you can use the prefix sum pattern instead of sliding window.

## Implementation

Collect the prefix of each idx.

```typescript
function prob(nums:number[], k:number):number {

    const prefix:number[] = []; 

    let acc = 0;
    for(const num of nums) {
        acc+=num;
        prefix.push(acc);
    }

    /*
        So now prefix[i] equals nums[0] + nums[1] + ... + nums[i]
    */
}
```
Then you can check the partial sum (subarray sum) `nums[i] + nums[i+1] + ... + nums[j]` by `prefix[j] - prefix[i-1]`.

## Note

Sometime you'll use the HashMap to help you do check fastly (instead of traversal), then don't forget add `0` in your HashMap.

Since if the `nums=[1,1,1]` and `prefix = [1,2,3]`, you wanna find the subarray sum equals 1, don't miss the very first item.