class Solution:
    # @return a ListNode
    def removeNthFromEnd(self, head, n):
        if n < 0 or head == None:
            return head

        d = {}
        d[0] = ListNode(0)
        d[0].next = head

        current = head
        # the length of the list
        lens = 1
        while current:
            d[lens] = current
            current = current.next
            lens += 1

        lens -= 1

        if n == 0:
            d[lens-1].next = None
        elif n <= lens:
            idx = lens - n + 1
            d[idx - 1].next = d[idx].next
        return d[0].next


# test
from _util import *
s =  Solution()
r = s.removeNthFromEnd(a2ll([1,2]), 1)
pl(r)
