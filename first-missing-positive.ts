function firstMissingPositive(nums: number[]): number {
	let i = 0;
	while (i < nums.length) {
		const idx = nums[i];

		// we don't care
		if (idx < 1 || idx >= nums.length) {
			i++;
			continue;
		}

		// prevent infinite loop
		if (nums[i] === nums[idx - 1]) {
			i++;
			continue;
		}

		[nums[idx - 1], nums[i]] = [nums[i], nums[idx - 1]];
	}

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== i + 1) return i + 1;
	}
	return nums.length + 1;
}
