/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let numList = (Math.abs(x) + "").split("");
    numList.reverse();
    if(numList[0] === "0"){
        numList.shift()
    }
    let newNum = numList.join("");
    
    if(newNum > 2**31 - 1){
        return 0;
    }

    if(x < 0){
        newNum = -1*newNum
    }

    return newNum;
};

