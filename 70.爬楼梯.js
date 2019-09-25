/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //使用二叉树遍历的方法：效率很低
    // if(n === 0){
    //     return 1
    // }
    // var count = 0;
    // if(n >= 1){
    //     count += climbStairs(n-1);
    // }

    // if(n >= 2){
    //    count += climbStairs(n-2); 
    // }

    // return count;
    var a = [0, 1, 2]
    for (var i = 3; i <= n; i++) {
        a[i] = a[i-1] + a[i-2]
    }
    return a[n]

};

