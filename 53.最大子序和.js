/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max;
    var len = nums.length;
    if(len === 1){
        return nums[0]
    }
    max = nums[0];
    var sum = 0;
    for(let i = 0; i < len; i++){
        sum = 0;
        for(let n = i; n < len; n++){
            sum += nums[n];
            if(sum > max){
                max = sum;
            }
        }
    }
    return max;
};

