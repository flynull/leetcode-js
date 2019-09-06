/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0, len = nums.length; i < len; i++){
        for(let n = i + 1; n < len; n++){
            if(nums[i] + nums[n] === target){
                return [i,n]
            }
        }
    }
};

