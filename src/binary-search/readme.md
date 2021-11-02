# Summary of Binary Search

## Binary Search Pattern

1. search something in sorted array
2. Bound the time-complexity to log N

## Trick of solving binary search

- Implement your `findIndex` function which accept the `compareFn`
- so you can build a general binary search function in `O(logN)` time to solve the different kind binary search prob.

It's a mimic interface as `Array.prototype.findIndex`

The Array's findIndex usage is `arr.findIndex((val,idx)=> val===0)`, 

And yes, you can do your own `findIndex` using `binary-search` for the sorted array, to reduce the time-complexity from `O(n)` to `O(log n)`.


```typescript
const findIndex = (arr:number[], compareFn:(val:number, idx:number):number) => {
    const N = arr.length;
    let lo = 0, hi = N-1;
    while(lo<=hi) {
        const mid = Math.floor((lo+hi)/2);

        if(compareFn(arr[mid], mid) === 0) return mid; // hit
        if(compareFn(arr[mid], mid) < 0) lo = mid+1;
        else hi = mid-1;
    }
    return lo-1;
}
```

So we can deal with toooooo much prob using this custom `findIndex` in `O(log n)` time.

704. Binary Search (Easy)
```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```
Code:
```typescript
function search(nums: number[], target: number): number {
    return findIndex(nums, val=> val-target);
};
```

---

153. Find Minimum in Rotated Sorted Array (Medium)
```
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
```

```typescript
function findMin(nums: number[]): number {
	const maxIdx = findIndex(nums, (val: number, index: number): number => {
		if (val < nums[0]) return 1; // compare with first item, if small move the `hi` pointer backward
		else return -1; // equal or bigger, move lo
	});

	return nums[(maxIdx + 1) % nums.length];
}
```

---

154. Find Minimum in Rotated Sorted Array II (Hard)

```
Input: nums = [2,2,2,0,1] (we have duplicated input)
Output: 0
```
```typescript

function findMin(nums: number[]): number {
    const first = nums[0];
    // preprocessing to the tail of array 
    while(nums.length !== 0 && nums[0] === nums[nums.length - 1]) {
        nums.pop();
    }
    if(nums.length === 0) return first;

    // same as 153.
    const maxIdx = findIndex(nums, val => val>= nums[0] ? -1 : 1)
    return nums[ (maxIdx + 1) % nums.length ]
};
```
