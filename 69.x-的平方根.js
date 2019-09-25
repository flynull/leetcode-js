/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let index=0;
    for(;; index++){
        if(x == index * index){
            break;
        }else if(x < index * index){
            index -= 1;
            break;
        }
    }
    return index;
};

