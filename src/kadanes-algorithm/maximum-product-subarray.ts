function maxProduct(nums: number[]): number {
    /**
     * We do both side traversal to track all possible max product
     *
     * Since the negative * negative is positive, we cannot drop the negative result!
     *
     * For a case [3,-1,4, -1], the product is [3, -3, -12, 12], yeah we cannot drop, the 12 is the max subarry product
     *
     * But another case [3,-1,4], if you don't not drop the negative case ([3,-3,-12]) you cannot get the correct result 4
     *
     * The point is if we do the kadane from both side, we can deal with the missing case.
     *
     * If there's odd negative, we need deal with the two side possible subarray, if there's even negative, the both side would lead the same result
     *
     *
     */

    // kadane's algo
    const N = nums.length;
    let maxProductLeft = 0;
    let maxProductRight = 0;

    let ret = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < N; i++) {
        if (maxProductLeft === 0) maxProductLeft = 1;
        maxProductLeft *= nums[i];
        ret = Math.max(ret, maxProductLeft);

        if (maxProductRight === 0) maxProductRight = 1;
        maxProductRight *= nums[N - i - 1];
        ret = Math.max(ret, maxProductRight);
    }
    return ret;
}
