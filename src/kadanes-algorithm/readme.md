# Summary of Kadanes Algorithm

## Desc.
https://en.wikipedia.org/wiki/Maximum_subarray_problem

## Prob. Pattern 

- Maximum subarray sum
- Maximum subarray product

Some kind of the accumulation of the subarray. 

## Solution Pattern

```typescript

let maxSum = 0;
let ret = Number.MIN_SAFE_INTEGER;

for(const num of nums) {
    if(maxSum < 0) maxSum = 0;

    maxSum += num;
    ret = Math.max(ret, maxSum); // keep comparing the local max sum
}
```

The key point is we're gonna drop the previous result if it's not satisfied, in this case we don't care the negative sum.

## Other similar but same patter

### Maximum absolute sum

collect the positive max & negative max, do the compare
```typescript
for(const num of nums) {
    if(positive < 0) positive = 0;
    if(negative > 0) negative = 0;

    positive += num;
    negative += num;

    ret = Math.max(ret, positive, Math.abs(negative))
}
```

### Maximum product

Same, but two thing we need to consider, one is if there's a zero, two is there's odd's negative number

So the pattern would be 
```typescript
for(let i = 0; i < N; i++) {
    // if there's occurs product lead 0, reset to 1, otherwise you'll get all zero
    if(lproduct === 0) lproduct = 1;
    if(rproduct === 0) rproduct = 1;

    // 1 pass do the both side
    lproduct *= nums[i];
    rproduct *= nums[N-i-1];

    ret = Math.max(ret, lproduct, rproduct);
}
```
While we do the both side, we consider each possible case like `nums = [1, 2, -3, 4]` there's a negative value separate to two subarray `[1,2]` and `[4]`.

I mean, if there's odd's negative, we can always separate to two positive subarray product.