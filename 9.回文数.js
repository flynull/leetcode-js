/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    let temp = x, num = 0;

    while (temp) {
        num *=10;
        num += temp%10;
        temp = parseInt(temp/10)
    }
    
    if(num == x){
        return true;
    }else{
        return false;
    }
};

