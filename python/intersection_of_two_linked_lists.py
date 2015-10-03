# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # @param two ListNodes
    # @return the intersected ListNode
    def getIntersectionNode(self, headA, headB):
        lA = self.getlen(headA)
        lB = self.getlen(headB)
        if lA > lB:
            tmp = headA
            headA = headB
            headB = tmp
            tmp = lA
            lA = lB
            lB = tmp

        pA = headA
        pB = headB
        intersection = None
        for i in range(lB - lA):
            pB = pB.next
        while pB:
            if pB.val != pA.val:
                intersection = None
            elif not intersection:
                intersection = pB
            pB = pB.next
            pA = pA.next

        return intersection

    def getlen(self, head):
        c = head
        l = 0
        while c:
            l += 1
            c = c.next
        return l

from _util import *
s = Solution()
# list A < list B
n = s.getIntersectionNode(a2ll([1,2,4,5,6]), a2ll([2,1,3,6,5,6]));
assert n.val == 5
# list A > list B
n = s.getIntersectionNode(a2ll([1,2,4,5,6]), a2ll([4,7,6]));
assert n.val == 6
# list A = list B
n = s.getIntersectionNode(a2ll([4,5,6]), a2ll([4,7,6]));
assert n.val == 6
