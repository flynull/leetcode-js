/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //网上的思路:用数组res保存前i个元素能得到的最大金额，
    // 有1个元素时能得到的最大金额为nums[0]，
    // 有两个元素时的最大值为nums[0]和nums[1]之间的最大值，
    // 有i个元素时能得到的最大金额为res[i-2]+nums[i]和res[i-1]的最大值。
    let plan = [];
    let len = nums.length;
    if(len === 0){
        return 0
    }
    plan.push(nums[0]);
    if(len === 1){
        return plan[0];
    }
    plan.push(Math.max(nums[0],nums[1]))
    if(len === 2){
        return plan[1]
    }
    for(let i = 2; i<len; i++){
        plan[i] = (plan[i - 2] + nums[i] > plan[i -1])? plan[i - 2] + nums[i] : plan[i -1];
    }
    return plan[len - 1]
};

