# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # @return a ListNode
    def addTwoNumbers(self, l1, l2):

        sum0 = (l1.val + l2.val) % 10
        carry = (l1.val + l2.val) / 10

        # root
        root = ListNode(sum0)
        l1 = l1.next
        l2 = l2.next
        cursor = root
        while l1 and l2:
            v1 = l1.val
            v2 = l2.val

            s = (v1 + v2 + carry)
            val = s % 10
            carry = s / 10

            cursor.next = ListNode(val)
            cursor = cursor.next
            l1 = l1.next
            l2 = l2.next

        l2 = l2 if l2 else l1
        while l2:
            s = l2.val + carry
            val = s % 10
            carry = s / 10

            cursor.next = ListNode(val)
            cursor = cursor.next

            l2 = l2.next
        if carry != 0:
            cursor.next = ListNode(carry)

        return root


## test code
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
#
# s = Solution()
# ll =  s.addTwoNumbers(a2ll([7,0,3,6,7,3,2,1,5]), a2ll([9,2,5,5,6,1,2,2,4]))
# while ll:
#     print ll.val,
#     ll = ll.next
