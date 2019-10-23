/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isMirror(root,root);
};

var isMirror = function(treeNode1,treeNode2){
    if(treeNode1 == null && treeNode2 == null) return true;
    if(treeNode1 == null || treeNode2 == null) return false;
    return (treeNode1.val == treeNode2.val) && 
            isMirror(treeNode1.left,treeNode2.right) &&
            isMirror(treeNode1.right, treeNode2.left)
}

