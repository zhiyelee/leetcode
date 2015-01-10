class Solution:
    # @return an integer
    def reverse(self, x):
        sym = ''
        # strip right 0 for reverse
        sx = str(x).rstrip('0')

        if len(sx) == 1:
            return int(sx)
        elif len(sx) == 0:
            return 0
        else:
            l = list(sx)
            first = l[0]
            if not first.isdigit():
                l = l[1:]
                sym = first
            res = int(sym + ''.join(list(reversed(l))))
            import sys
            if res > sys.maxint:
                res = 0
            return res




# # test
# s = Solution()
# x = 123
# print s.reverse(0)
# print s.reverse(100000)
# print s.reverse(1212)
# print s.reverse(-899)
# print s.reverse(99989787387873**2)
