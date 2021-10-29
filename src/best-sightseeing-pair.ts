function maxScoreSightseeingPair(A: number[]): number {
  const N = A.length;

  // find the max A[i] + A[j] + i - j;
  // |----------> (A[i] + i)    + (A[j] - j);

  // i < j
  let ret = 0;
  let i = 0,
    j = 1;

  while (j < N) {
    const localRes = A[i] + A[j] + i - j;
    ret = Math.max(ret, localRes);

    if (A[i] + i < A[j] + j) i = j;
    // now we found the pos j is the best point pos[k]+k in current
    // updadte the i pos

    j++;
  }
  return ret;
}
