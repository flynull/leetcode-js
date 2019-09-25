/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var vhead = new ListNode(null);
    vhead.next = head; 
    while (head !== null && head.next !== null) {
        if(head.next.val === head.val){

           if(head.next.next !== null){
              head.next = head.next.next;
           }else{
              head.next = null;
           }

        }else{
           head = head.next;
        }
        
    }
    
    return vhead.next;
};

