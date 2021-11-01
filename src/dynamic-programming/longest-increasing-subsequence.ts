// O(n ** 2)
function lengthOfLIS(nums: number[]): number {
    /**
    
        DP solve this question, let dp[i] be then local optimal LIS
        
        dp[N-1] = 1;
        
        dp[i] = for(let j=i+1; j<N; j++) if(nums[j] > nums[i]) 1+dp[j] 
    
    **/
    const N = nums.length;
    const dp = Array.from({ length: N }, () => 1);
    let ret = 1;
    for (let i = N - 2; i >= 0; i--) {
        for (let j = i + 1; j < N; j++) {
            if (nums[j] > nums[i]) dp[i] = Math.max(dp[i], 1 + dp[j]);
        }
        ret = Math.max(dp[i], ret); // you know... LIS might exist in the middle
    }
    return ret;
}
