# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # @param two ListNodes
    # @return a ListNode
    def mergeTwoLists(self, l1, l2):
        if not l1:
            return l2
        if not l2:
            return l1


        s = ListNode(0)
        curr = s
        while l1 and l2:
            if l1.val < l2.val:
                val = l1.val
                l1 = l1.next
            else:
                val = l2.val
                l2 = l2.next
            curr.next = ListNode(val)
            curr = curr.next
        if l1:
            curr.next = l1
        if l2:
            curr.next = l2

        return s.next



# # test code
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
#
# def a2ll(l):
#     ll = ListNode(l[0])
#
#     cursor = ll
#     for i in range(1, len(l)):
#         cursor.next = ListNode(l[i])
#         cursor = cursor.next
#
#     return ll
# def pl(ll):
#     while ll.next:
#         print ll.val,
#         ll = ll.next
#     print ll.val
#
# s = Solution()
# ll =  s.mergeTwoLists(a2ll([1,2,3,6,7]), a2ll([1,4,5,8]))
# # output 1 1 2 3 4 5 6 7 8
# pl(ll)
