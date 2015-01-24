# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # @param two ListNodes
    # @return a ListNode
    def mergeTwoLists(self, l1, l2):
        # assume ascending order
        # merge based on l1
        if l1.val > l2.val:
            tmp = l1
            l1 = l2
            l2 = tmp

        pre = l1
        curr = l1
        pl(l1)
        pl(l2)
        while curr.val != None and l2.val != None:
            if l2.val >= curr.val:
                while curr.next and curr.next.val < l2.val:
                    print l2.val
                    pre = curr
                    curr = curr.next
                if curr.next:
                    pre = curr
                    tmp = curr.next
                    curr = l2
                    l2 = l2.next
                    curr.next = tmp
                    pre.next = curr
                else:
                    curr.next = l2
                    return l1






# test code
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def a2ll(l):
    ll = ListNode(l[0])

    cursor = ll
    for i in range(1, len(l)):
        cursor.next = ListNode(l[i])
        cursor = cursor.next

    return ll
def pl(ll):
    while ll.next:
        print ll.val,
        ll = ll.next
    print ll.val

s = Solution()
ll =  s.mergeTwoLists(a2ll([1,2,3,6,7]), a2ll([1,4,5,8]))
pl(ll)
