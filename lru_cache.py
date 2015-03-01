class LRUCache:

    # @param capacity, an integer
    def __init__(self, capacity):
        self.q = []
        self.capacity = capacity;
        self.store = {}
        self.dbl = DBLinkedList()


    # @return an integer
    def get(self, key):
        if key in self.store:
            self.dbl.lift(self.store[key])
            return self.store[key].value
        return -1


    # @param key, an integer
    # @param value, an integer
    # @return nothing
    def set(self, key, value):
        if key in self.store:
            n = self.store[key]
            n.value = value
            self.dbl.remove(n)
            self.dbl.append(n)
        else:
            if self.capacity == len(self.store):
                k = self.dbl.pop()
                del self.store[k]
            n = Node(key, value)
            self.dbl.append(n)
            self.store[key] = n


class Node:
    def __init__(self, key, value):
        self.value = value
        self.key = key
        self.pre = None
        self.next = None

class DBLinkedList:
    def __init__(self):
        self.head = Node(None, None)
        self.tail = Node(None, None)
        self.head.next = self.tail
        self.tail.pre = self.head

    def append(self, node):
        tmp = self.tail.pre
        tmp.next = node
        node.pre = tmp
        node.next = self.tail
        self.tail.pre = node
    def remove(self, node):
        node.pre.next = node.next
        node.next.pre = node.pre
    def pop(self):
        tmp = self.head.next
        self.head.next = tmp.next
        tmp.next.pre = self.head
        return tmp.key

    def lift(self, node):
        self.remove(node)
        self.append(node)


s = LRUCache(3)
s.set(1, 1)
s.set(2, 2)
s.set(3, 3)
s.set(2, 4)
s.set(4, 5)
assert s.get(1) == -1
assert s.get(2) == 4

s = LRUCache(2)
s.set(2,1)
s.set(1,1)
assert s.get(2) == 1
s.set(4,1)
assert s.get(1) == -1
assert s.get(2) == 1

s = LRUCache(1)
s.set(2,1)
assert s.get(2) == 1
