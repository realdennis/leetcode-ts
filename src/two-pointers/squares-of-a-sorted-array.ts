function sortedSquares(nums: number[]): number[] {
    const N = nums.length;
    const positiveIdx = nums.findIndex((val) => val >= 0);

    const negative = nums.slice(0, positiveIdx).reverse();
    const positive = nums.slice(positiveIdx);

    const ret = [];

    let pos1 = 0,
        pos2 = 0;
    for (let i = 0; i < N; i++) {
        if (pos2 === positive.length) {
            ret.push(negative[pos1] ** 2);
            pos1++;
            continue;
        }

        if (pos1 === negative.length) {
            ret.push(positive[pos2] ** 2);
            pos2++;
            continue;
        }

        if (Math.abs(negative[pos1]) < Math.abs(positive[pos2])) {
            ret.push(negative[pos1] ** 2);
            pos1++;
        } else {
            ret.push(positive[pos2] ** 2);
            pos2++;
        }
    }
    return ret;
}
