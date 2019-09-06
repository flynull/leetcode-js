/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0;
    let strList = s.split("");
    let numTable = function(s){
        let trueNum;
        switch (s) {
            case 'I':
                trueNum = 1;
                break;
            case 'V':
                trueNum = 5;
                break;
            case 'X':
                trueNum = 10;
                break;
            case 'L':
                trueNum = 50;
                break;            
            case 'C':
                trueNum = 100;
                break;
            case 'D':
                trueNum = 500;
                break;
            case 'M':
                trueNum = 1000;
                break;    
            default:
                break;
        }
        return trueNum;
    }
    for(let i = 0,len = strList.length;i < len; i++ ){
        let curNum = numTable(strList[i]);
        if(i + 1 < len){
            if(
                (curNum == 1 && (strList[i + 1] == 'V' || strList[i + 1] == 'X')) ||
                (curNum == 10 &&  (strList[i + 1] == 'L' || strList[i + 1] == 'C')) || 
                (curNum == 100 && (strList[i + 1] == 'D' || strList[i + 1] == 'M'))
            ){
                curNum = numTable(strList[i + 1]) - curNum;
                i++;
            }
        } 
        num += curNum;
    }

    return num;
};



