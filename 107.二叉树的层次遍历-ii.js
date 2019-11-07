/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    // 广度优先搜索
    let queue = [root];
    if(!root){
        return [];
    }
    let res = [];

    while(queue.length){
        let nextQueue = [];
        let tempRes = [];
        for(let i = 0; i<queue.length;i++){
            tempRes.push(queue[i].val);
            queue[i].left ? nextQueue.push(queue[i].left) : null;
            queue[i].right ? nextQueue.push(queue[i].right) : null;
        }
        res.push(tempRes);
        queue = nextQueue;
    }

    return res.reverse();

};
// @lc code=end

