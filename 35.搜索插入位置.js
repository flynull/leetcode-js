/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let searchIndex = 0;
    for(let i = 0;i < nums.length; i++){
        if(nums[i] < target){
            searchIndex = i + 1;
        }
        if(nums[i] >= target){
            searchIndex = i;
            break;
        }
    }
    return searchIndex;
};

