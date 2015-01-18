class Solution:
    # @return a string
    def longestPalindrome(self, s):
        res = ''

        for i in range(len(s)):
            podd = self.getlongest(s, i, i)
            if len(podd) > len(res):
                res = podd

            peven = self.getlongest(s, i, i + 1)
            if len(peven) > len(res):
                res = peven

        return res
    def getlongest(self, s, l, r):
        lens = len(s)
        while l >= 0 and r < lens and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l + 1 : r]


# test

s = Solution()

assert s.longestPalindrome('abcdedcba') == 'abcdedcba'
assert s.longestPalindrome('abcdedcbadddd') == 'abcdedcba'
