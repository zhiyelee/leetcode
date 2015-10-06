class Solution:
    # @param haystack, a string
    # @param needle, a string
    # @return an integer
    def strStr(self, haystack, needle):
        lenh = len(haystack)
        lenn = len(needle)

        if (lenh < lenn):
            return -1

        lenSub = lenh
        idx = 0
        while lenSub >= lenn:
            if haystack[idx: idx + lenn] == needle:
                return idx
            else:
                idx += 1
                lenSub -= 1

        return -1

s = Solution()
assert s.strStr('abcdedggg', 'ggg') == 6
assert s.strStr('ab', 'ggg') == -1
assert s.strStr('abc', 'ggg') == -1
