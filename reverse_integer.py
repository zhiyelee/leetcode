class Solution:
    # @return an integer
    def reverse(self, x):
        maxint = 2**31 - 1
        sign = 1
        if x < 0:
            sign = -1
        strx = str(abs(x))
        res = strx[::-1]
        if (int(res)) > maxint:
            return 0
        return sign*int(res)




assert 1212 == 1212
# test
s = Solution()
assert s.reverse(0) == 0
assert s.reverse(100000) == 1
assert s.reverse(1212) == 2121
assert s.reverse(-899) == -998
assert s.reverse(99989787387873**2) == 0
