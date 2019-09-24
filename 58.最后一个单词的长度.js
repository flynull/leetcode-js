/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length === 0){
        return 0;
    }
    let ss = s.replace(/(^\s*)|(\s*$)/g, "").split(" ");
    
    return ss[ss.length - 1].length;
};

