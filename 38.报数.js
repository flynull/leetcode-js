/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1){
        return "1";
    }else if(n === 2){
        return "11";
    }else{
        let x = countAndSay(n - 1);
        let count = 0;
        let temp = 0;
        let m = "";
        for(let i = 0;  i < x.length;  i++){
            if(temp !== x[i]){
                if(temp !== 0){
                   m = m + "" + count + "" + temp; 
                }
                temp = x[i];
                count = 1;
            }else{
                count++;
            }
        }
        if(temp !== 0){
            m = m + "" + count + "" + temp; 
        }
        return m;
    }
};

