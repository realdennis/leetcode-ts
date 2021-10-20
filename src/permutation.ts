const backtracking = (nums: number[], level: number, ans: number[][]): void => {
	if (level === nums.length - 1) {
		ans.push([...nums]);
		return;
	}

	for (let i = level; i < nums.length; i++) {
		[nums[i], nums[level]] = [nums[level], nums[i]];
		backtracking(nums, level + 1, ans);
		[nums[i], nums[level]] = [nums[level], nums[i]];
	}
};
function permute(nums: number[]): number[][] {
	const ans: number[][] = [];
	backtracking(nums, 0, ans);

	return ans;
}

console.log(permute([1, 2, 3]));
// permute([1, 2, 3]);
