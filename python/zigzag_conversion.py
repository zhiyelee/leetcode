class Solution:
    # @return a string
    def convert(self, s, nRows):

        if nRows == 1 or len(s) <= 2:
            return s

        # compute the length of the zigzag
        zigzagLen = 2*nRows - 2;
        lens = len(s)
        res = ''
        for i in range(nRows):
            idx = i
            while idx < lens:
                res = res + s[idx]
                if i != 0 and i != nRows - 1:
                    x = idx + (zigzagLen - 2*i)
                    if (x < lens):
                        res = res + s[x]

                idx = idx + zigzagLen

        return res


s = Solution()

assert s.convert('0123456789', 5) == '0817926354'
assert s.convert('0123456789', 3) == '0481357926'
assert s.convert('0123456789', 2) == '0246813579'
assert s.convert('012', 1) == '012'



