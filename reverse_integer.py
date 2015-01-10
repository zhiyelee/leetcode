class Solution:
    # @return an integer
    def reverse(self, x):
        sign = 1
        if x < 0:
            sign = -1

        strx = str(abs(x))
        res = strx[::-1]
        return sign*int(res)




# # test
# s = Solution()
# x = 123
# print s.reverse(0)
# print s.reverse(100000)
# print s.reverse(1212)
# print s.reverse(-899)
# print s.reverse(99989787387873**2)
