export {};
function findTargetSumWays(nums: number[], target: number): number {
    /**
      
      We can use the DP to keep the local optimal solution
      
      dp[i][j] means target sum ways of nums.slice(i) and target j
      
      dp[0][target] is the ret
      
      dp[i][j] = dp[i+1][j + nums[i]] + dp[i+1][j - nums[i]]
                              ^^^ since it's a little bit dynamic, let's use function call w/ memo
      
      dp[N-1][j] = nums[N-1] * 1 === j or nums[N-1] * (-1) === j
      **/
    const N = nums.length;
    const dp = _.memoize(
        (startIdx: number, target: number): number => {
            if (startIdx === N) return 0;
            if (startIdx === N - 1)
                return (
                    (nums[N - 1] === target ? 1 : 0) + (nums[N - 1] === -1 * target ? 1 : 0) // consider if the target is 0, and current is 0, we have two res
                );

            return (
                dp(startIdx + 1, target + nums[startIdx]) +
                dp(startIdx + 1, target - nums[startIdx])
            );
        },
        (...args: number[]) => JSON.stringify(args) // general memorize resolver
    );

    return dp(0, target);
}
