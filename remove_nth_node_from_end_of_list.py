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

        current = head
        # the length of the list
        lens = 0
        while current:
            d[lens] = current
            current = current.next
            lens += 1

        # remove the tail node
        if n == lens:
            if lens == 1:
                return None
            else:
                return d[1]

        if n == 0:
            d[lens - 1].next = None
        # remove the `head` node
        elif n > lens:
            return head
        elif n < lens:
            idx = lens - n
            d[idx - 1].next = d[idx].next
        return head


