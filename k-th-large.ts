function findKthLargest(nums: number[], k: number): number {
	/**
        quick select
    **/

	const quickselect = (lo: number, hi: number, K: number): number => {
		const pivot = hi;
		let storedIdx = lo;
		for (let i = lo; i < hi; i++) {
			if (nums[i] < nums[pivot]) {
				[nums[i], nums[storedIdx]] = [nums[storedIdx], nums[i]];
				storedIdx++;
			}
		}
		[nums[pivot], nums[storedIdx]] = [nums[storedIdx], nums[pivot]];

		if (storedIdx === K) return nums[storedIdx];
		if (K > storedIdx) return quickselect(storedIdx + 1, hi, K);
		else return quickselect(lo, storedIdx - 1, K);
	};
	return quickselect(0, nums.length - 1, nums.length - k);
}
