/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if(root == null){
        return 0;
    }
    
    if(root.left == null && root.right == null){
       return 1; 
    }

    var leftDepth = maxDepth(root.left);
    var rightDepth = maxDepth(root.right);

    return 1 + (leftDepth > rightDepth ? leftDepth:rightDepth);
    
};
// @lc code=end

