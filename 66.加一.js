/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var flag = true;
    var len = digits.length;
    for(let i = len - 1 ; i >= 0 ; i--){
        if(flag){
            flag = false;
            if(digits[i] + 1 === 10){
                digits[i] = 0; 
                flag = true;
            }else{
                digits[i] = digits[i] + 1;
            }  
        }      
    }

    if(flag){
        digits.unshift(1);
    }

    return  digits;    
};

