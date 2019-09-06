/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s === ''){
        return true;
    }

    if(s.length < 2){
        return false;
    }

    const dist = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    //字符栈
    let charStack = [];
    let strList = s.split("");
    while (strList.length) {
        let str = strList.shift();
        if(str !== dist[charStack[charStack.length - 1]]){
            charStack.push(str);
        }else{
            charStack.pop();
        }
    }
    
    if(charStack.length > 0){
        return false;
    }else{
        return true;
    }
};

