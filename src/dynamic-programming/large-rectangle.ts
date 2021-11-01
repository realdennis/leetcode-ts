function largestRectangleArea(heights: number[]): number {
    const L = heights.length;

    const leftBound = Array.from({ length: L }, (_, idx) => idx - 1);
    const rightBound = Array.from({ length: L }, (_, idx) => idx + 1); // initial bound

    // DP to handle the leftbound
    for (let i = 0; i < L; i++) {
        let p = i - 1;
        while (p >= 0 && heights[p] >= heights[i]) p = leftBound[p]; // use the memorize result to jump
        leftBound[i] = p;
    }

    // DP to handle the rightBound
    for (let i = L; i >= 0; i--) {
        let q = i + 1;
        while (q < L && heights[q] >= heights[i]) q = rightBound[q]; // same
        rightBound[i] = q;
    }

    let ans = 0;
    for (let i = 0; i < heights.length; i++) {
        ans = Math.max(ans, (rightBound[i] - leftBound[i] - 1) * heights[i]);
    }
    return ans;
}
