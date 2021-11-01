export {};
function twoSum(numbers: number[], target: number): number[] {
  const N = numbers.length;
  let lo = 0,
    hi = N - 1;

  // exactly one solution
  while (numbers[lo] + numbers[hi] !== target) {
    if (numbers[lo] + numbers[hi] > target) hi--;
    else lo++;
  }

  return [lo + 1, hi + 1];
}
