# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    # @return a ListNode
    def removeNthFromEnd(self, head, n):
        if n < 0 or head == None:
            return head

        d = {}

        current =  head
        l = 0
        while current:
            d[l] = current
            current = current.next
            l += 1

        if n == 0:
            d[l - 1].next = None
            return head
        elif n > l:
            return head
        elif n == l:
            if l == 1:
                return None
            else:
                return d[1]
        elif n < l:
            idx = l - n
            d[idx - 1].next = d[idx].next
            return head


