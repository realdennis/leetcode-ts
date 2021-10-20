function maxSlidingWindow(nums: number[], K: number): number[] {
	const ret: number[] = [];

	const stack: number[] = [];

	const N = nums.length;

	let l = 0,
		r = 0;
	const isNotFull = (): boolean => r - l === K;

	const grow = (): void => {
		while (stack.length !== 0 && stack[stack.length - 1] < nums[r]) stack.pop();
		stack.push(nums[r]);
		r++;
	};
	const shrink = (): void => {
		if (nums[l] === stack[0]) stack.shift();
		l++;
	};

	const check = (): void => {
		const max = stack[0];
		ret.push(max);
	};
	while (r <= N) {
		if (isNotFull()) {
			grow();
		} else {
			check();
			shrink();
		}
	}
	return ret;
}

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
