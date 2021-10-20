/**
    Using stack solve this
    
    1. Kepp a stack [], which keep push [value, index]
    2. Iteration
         check the stack end
            1. if end.value < curr.value
                1. pop end
                2. diffVal = endVal - lastVal
                3. diffIdx = curIdx - endIdx
                3. diffVal * (diffIdx - 1)
            2. else
                1. diffVal = curVal - lastVal ----> now use the curVal
                2. diffIdx = curIdx - endIdx
                3. diffVal * (diffIdx - 1)
                4. push curr
    
**/

function trap(height: number[]): number {
	let ans: number = 0;
	let lastVal: number = 0;
	const stack: [number, number][] = [];
	for (let i = 0; i < height.length; i++) {
		const curVal = height[i];
		const curIdx = i;
		if (stack.length === 0) stack.push([curVal, curIdx]);
		else {
			while (stack.length !== 0 && stack[stack.length - 1][0] <= curVal) {
				const end = stack.pop();
				const [endVal, endIdx] = end;
				const diffIdx = curIdx - endIdx;
				const diffVal = endVal - lastVal;
				ans += diffVal * (diffIdx - 1);
				lastVal = endVal;
			}
			if (stack.length !== 0) {
				const end = stack[stack.length - 1];
				const [endVal, endIdx] = end;
				const diffIdx = curIdx - endIdx;
				const diffVal = curVal - lastVal;
				ans += diffVal * (diffIdx - 1);
			}
			stack.push([curVal, curIdx]);
		}
	}
	return ans;
}
