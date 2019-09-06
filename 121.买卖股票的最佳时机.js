/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit = 0
    
    for(let i = 0,len = prices.length;i < len; i++){
        for(let j = i+1; j < len; j ++){
            //卖 - 买 = 收益
            if(prices[j] - prices[i] > profit){
                profit = prices[j] - prices[i];
            }
        }
    }

    return profit
};

