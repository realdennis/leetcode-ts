# Summary of Sliding Window

## Sliding window pattern
If there's a linear optimal solution, like subarray / substring based solution, you can take a look on sliding window. (but if it's subarray sum, please check the kadanes' algorithm)

### Example
239.Sliding Window Maximum
```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

## Pattern of sliding window

Two case: 
1. Update the return value when we touch the condition
2. Update the return value even when shrink

General sliding-window be like this (case 1)
```typescript

const N = inputStr.length;

let l = 0,
    r = 0;
/*
Implement below pseudo directives 
*/
const isLegal = ():boolean=> {
    const incoming = inputStr[r];
    if(/*some condition & state check*/) return false;
    return true
}
const grow = ():void => {
    const rightChar = inputStr[r];
    map.set(rightChar, map.get(rightChar) - 1); // count
    r++
}
const shrink = ():void => {
    const leftChar = inputStr[l];
    map.set(leftChar, map.get(leftChar) + 1); // relax
    l++;
}
while (r < N) {
    if(isLegal()) {
        grow();
        update()
    }else {
        shrink()
    }
}

```

General sliding window pattern (case 2), you can see we put the `update()` under the while loop, that means we still need to update the return valud when we do shink.

```typescript
while(r<=N) { // notice we use the smaller or equal
    if(isNotLegal()) {
        shrink();
    }else {
        if(r===N) break;
        grow();
    }
    update()
}
```

### Example for two case

- Case 1

3.Longest Substring Without Repeating Characters
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

- Case 2

209.Minimum Size Subarray Sum
```
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
```

## Note

Somehow there's other case that `l === 0` & `r === 0` but it's still illegal to pick.

```typescript

const shrink = ():void => {
    if(l=r) {
        l++; 
        r++;
        return; // don't do any relax
    }
    const leftChar = inputStr[l];
    map.set(leftChar, map.get(leftChar) + 1); // relax back the string frequency
    l++;
}
```