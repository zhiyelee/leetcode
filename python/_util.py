
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
    while ll:
        print ll.val,
        ll = ll.next
    print
