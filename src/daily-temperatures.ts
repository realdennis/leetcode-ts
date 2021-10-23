function dailyTemperatures(A: number[]): number[] {
  const N = A.length;
  const ans = Array.from({ length: N }, () => 0);

  const stack = []; // keep the waiting idx;

  for (let i = 0; i < N; i++) {
    const cur = A[i];
    while (stack.length !== 0) {
      const lastIdx = stack[stack.length - 1];
      const lastVal = A[lastIdx];
      if (cur > lastVal) {
        // relax the top and update ans
        ans[lastIdx] = i - lastIdx; // index dist is what we need
        stack.pop();
      } else {
        break;
      }
    }
    stack.push(i); // waiting for following items which can give me a hand to survive me!
  }
  return ans;
}
