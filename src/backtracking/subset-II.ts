function subsetsWithDup(nums: number[]): number[][] {
  // since we need to do the de-dup, we might need to sort and de-dup the same start
  nums.sort((prev, next) => prev - next);

  const N = nums.length;
  const ret: number[][] = [];

  const backtracking = (
    start = 0,
    prevRes: number[] = [],
    visited = Array.from({ length: N }, () => false)
  ): void => {
    if (start === N) {
      ret.push(Array.from(prevRes));
      return;
    }
    // no choose case
    backtracking(start + 1, prevRes, visited);

    // choose case, preprocessing if it's the CANNOT_CHOOSE

    let prev = start - 1;
    while (prev >= 0 && nums[prev] === nums[start]) {
      if (visited[prev]) {
        prev--;
      } else {
        return;
      }
    }

    prevRes.push(nums[start]);
    visited[start] = true;
    backtracking(start + 1, prevRes, visited);
    visited[start] = false;
    prevRes.pop();
  };
  backtracking();

  return ret;
}
