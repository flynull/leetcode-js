/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var count = 0;
    var len = nums.length;
    var temp = 0;
    var index = 0;
    while (index < len) {
        if(nums[index] === val){
            for(let i = index;i<len;i++){
                if(nums[i] !== val){
                    temp = nums[i];
                    nums[i] = nums[index];
                    nums[index] = temp;
                    count++;
                    break;
                }
            }
        }else{
           count++;
        }
        index++;
    }
    return count;
};

