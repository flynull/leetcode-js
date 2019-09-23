/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) { 
    var len = nums.length;
    if(len <= 0 ){
        return 0;
    }else if(len == 1){
        return 1;
    }

    var index  = 0;
    var count = 1;
    var flag = false;
    
    var temp = 0;
    while (index < len && !flag) {
        if(nums[index] < nums[index + 1]){
            count++
        }else{
            flag = true;
            for(let i = index + 1; i < len; i++){
                if(nums[index] < nums[i]){
                    flag = false;
                    temp = nums[i];
                    nums[i] = nums[index + 1];
                    nums[index + 1] = temp;
                    count++;
                    break;
                }
            }
        }
        index ++;
    }

    return count;

};

