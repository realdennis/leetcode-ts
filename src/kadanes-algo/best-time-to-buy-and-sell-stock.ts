export {};
function maxProfit(prices: number[]): number {
  /**
  
  For this prob,   the prices = [7, 1, 5, 3, 6, 4], 
  we can transform to  profits = [-6, 4, -2, 3, -2]
  
  And calc the maximum subarry sum, but why?
  
  You can imagine you buy and sell in the same day
  
  so the profits of buy ith sell jth be like :
      
      sell ith  / buy ith / sell i+1th / buy i+1th / ... / sell j-th / buy jth
      ^ elimate this                                                      ^ elimate this
      
      buy ith / sell i+1 th / buy i+1 th / ... /  sell j-1th / buy j-1th / sell j-th
          ^^^^
          profit(i,i+1)       profit(i+1,i+2) ...                     profit(j-1, j)
          
      so if the maxprofit is occues in ith to jth, the profit(i, i+1) + ... profit(j-1, j+1) must be the maximun subarray sum
  
  **/

  // preprocessing for the profits array
  const profits = [];

  for (let i = 0; i < prices.length - 1; i++) {
    const profit = -prices[i] + prices[i + 1]; // buy ith sell i+1th
    profits.push(profit);
  }

  // calc the maximum subarray sum

  // using kadane algorithm
  const N = profits.length;
  let maxSum = 0;
  let ret = 0; // just don't buy and sell case

  for (let i = 0; i < N; i++) {
    if (maxSum < 0) maxSum = 0;

    maxSum += profits[i];

    ret = Math.max(ret, maxSum);
  }
  return ret;
}
