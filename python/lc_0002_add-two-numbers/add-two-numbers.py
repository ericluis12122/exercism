# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution(object):
    """
    :type l1: Optional[ListNode]
    :type l2: Optional[ListNode]
    :rtype: Optional[ListNode]
    """  
    def addTwoNumbers(self, l1, l2):
        head = ListNode()
        current = head
        carry = 0
        while l1 or l2 or carry:
            value = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry
            carry = value // 10
            current.next = ListNode(value % 10)
            current = current.next
            if l1: l1 = l1.next
            if l2: l2 = l2.next
        return head.next