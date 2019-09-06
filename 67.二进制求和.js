/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 会遇到精度问题
    // return (parseInt(a,2) + parseInt(b,2)).toString(2);

    let aList = a.split("");
    let bList = b.split("");
    let temp = 0;
    let rList = [];

    while (aList.length || bList.length) {
        let aItem = parseInt(aList.pop()) || 0;
        let bItem = parseInt(bList.pop()) || 0;
        let sumItem = aItem + bItem + temp;
        rList.unshift(sumItem % 2);
        if(sumItem > 1){
            temp = 1;   
        }else{
            temp = 0;
        }
    }

    if(temp == 1){
        rList.unshift(temp);
    }

    return rList.join("");
};

