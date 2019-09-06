/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var l3 = new ListNode(-1);
    var n = l3;
    
    while (l2 !== null && l1 !== null) {
        if(l1.val <= l2.val){
            n.next = l1;
            l1 = l1.next;
        }else{
            n.next = l2;
            l2 = l2.next;
        }
        n = n.next;
    }
    n.next = (l1 === null)?l2 : l1;
    return l3.next;
};

