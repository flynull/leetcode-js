/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    //特殊值
    if(n === 1){
        return true;
    }
    if(n <= 0){
        return false;
    }

    while (n > 2) {
        if(n % 1 !== 0){ //只要出现小数，直接退出循环
            n = 1;
        }
        n = n / 2;
    }

    if(n % 2 === 0){
        return true;
    }else{
        return false;
    }
};

