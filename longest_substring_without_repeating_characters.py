class Solution:
    # @return an integer
    def lengthOfLongestSubstring(self, s):
        d = {}
        lenS = len(s)

        if lenS <=1:
            return lenS

        ls = 0
        sls = 0
        sidx = 0
        for i in range(0, lenS):
            val = s[i]

            if val in d:
                d = self.clearD(d, s[sidx:d[val]])
                sidx = d[val] + 1
                d[val] = i
                sls = len(d)
            else:
                sls = sls + 1
                d[val] = i

            ls = sls if sls > ls else ls

        return ls
    def clearD(self, d, s):
        for i in range(0, len(s)):
            del d[s[i]]

        return d



s = Solution()

assert s.lengthOfLongestSubstring('') == 0
assert s.lengthOfLongestSubstring('ddddd') == 1
assert s.lengthOfLongestSubstring('abcdefgab') == 7
assert s.lengthOfLongestSubstring('abcdabcde') == 5


