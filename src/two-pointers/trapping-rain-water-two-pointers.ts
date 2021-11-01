export {};

function trap(A: number[]): number {
  const N = A.length;
  let ret = 0;

  // using two-pointers to calc the blue area
  let left = 0,
    right = N - 1;

  // initial the max value
  let leftMax = A[left],
    rightMax = A[right];

  while (left < right) {
    if (leftMax < rightMax) {
      // now the left->right is a safe area we can calc the blue area, since the right we have a wall height >= leftMax
      left++;
      leftMax = Math.max(leftMax, A[left]);
      ret += leftMax - A[left]; // if A[left] is the max, will +0
    } else {
      // same as above
      right--;
      rightMax = Math.max(rightMax, A[right]);
      ret += rightMax - A[right];
    }
  }
  return ret;
}
