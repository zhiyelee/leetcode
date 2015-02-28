class LRUCache:

    # @param capacity, an integer
    def __init__(self, capacity):
        self.q = []
        self.capacity = capacity;
        self.store = {}


    # @return an integer
    def get(self, key):
        if key in self.store:
            self.lifttofirst(key)
            return self.store[key]
        else:
            return -1

    def lifttofirst(self, key):
        # q[i] <==> q[end]
        for i in range(len(self.q)):
            if self.q[i] == key:
                break
        self.q.pop(i)
        self.q.append(key)



    # @param key, an integer
    # @param value, an integer
    # @return nothing
    def set(self, key, value):
        if key in self.store:
            self.lifttofirst(key)
        else:
            if len(self.q) == self.capacity:
                discard = self.q.pop(0)
                del self.store[discard]
            self.q.append(key)
        self.store[key] = value


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
