/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //先融合
    for(let i = m; i < m + n; i ++){
        nums1[i] = nums2[i - m];
    }
    //再排序
    var temp;
    for(let i = 0; i < m + n; i++){
        for(let j = i; j < m + n; j++){
            if(nums1[j] < nums1[i]){
                temp = nums1[j];
                nums1[j] = nums1[i];
                nums1[i] = temp;
            }
        }
    }
};

