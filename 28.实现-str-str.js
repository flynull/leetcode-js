/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0){
        return 0;
    }
    var fristIndex = -1;
    if(haystack.length === 0){
        return fristIndex;
    }
    var index = 0;
    var flag = true;
    while (index < haystack.length && flag) {
        if(haystack[index] = needle[0]){
            if(index + needle.length <= haystack.length){
                if(haystack.substr(index, needle.length) === needle){
                    fristIndex = index;
                    flag = false;
                }
            }else{
                flag = false;
            }
        }
        index++;
    }

    return fristIndex;
};

