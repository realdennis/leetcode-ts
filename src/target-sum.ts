function findTargetSumWays(nums: number[], target: number): number {
	let index = nums.length - 1,
		sum = 0;
	const dp = Array.from({ length: nums.length }, () =>
		Array.from(
			{ length: target + nums.reduce((a, b) => a + b) + 1 },
			(val) => 0
		)
	);
	const task = (index, sum, target, nums): number => {
		if (dp[index][sum] !== 0) return dp[index][sum];

		//     if(mem.has(key)) return mem.get(key)

		if (index < 0) {
			if (sum === target) return 1;
			else return 0;
		}

		const positiveCase = task(index - 1, sum + nums[index], target, nums);
		const negativeCase = task(index - 1, sum - nums[index], target, nums);

		// mem.set(key, positiveCase + negativeCase);
		dp[index][sum] = positiveCase + negativeCase;
		return positiveCase + negativeCase;
	};

	return task(index, sum, target, nums);
}
