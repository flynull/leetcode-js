/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commonStr = "";
    //找出最短字符串
    strs.sort((str1,str2) => {
        if (str1.length > str2.length) {
            return 1
        }
        if (str1.length < str2.length) {
            return -1
        }
        return 0
    })
    
    if(strs.length > 0){
        let s = strs[0];
        let teststr = "";
        for(let n = 0, strLen = s.length; n < strLen; n++){
            let flag = true;
            strs.forEach(element => {
                if(s[n] !== element.charAt(n)){
                    flag = false;
                }
            });
            if(flag){
              teststr += s[n]; 
            }else{
                break;
            }
        }
        commonStr += teststr;
    }
    
    return commonStr; 
};

