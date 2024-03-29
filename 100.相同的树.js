/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    //空树判读
    if(p === null && q === null){
        return true;
    }
    if(p !== null && q !== null && p.val==q.val){
        return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
    }else{
        return  false
    }
};

