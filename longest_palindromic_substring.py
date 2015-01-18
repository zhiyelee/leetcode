class Solution:
    # @return a string
    def longestPalindrome(self, s):
        lens = len(s)
        if (lens == 0):
            return 0

        maxLen = 1
        sIdx = 0

        for i in range(lens):
            # when increase 1 element, the maxLen can add 1, 2, 0
            # add 2, then compare s[i - maxLen -1] and i s[i - maxLen -1]
            if i - maxLen >=1 and s[i-maxLen - 1: i+1] == s[i-maxLen - 1: i +1][::-1]:
                sIdx = i - maxLen -1
                maxLen += 2
            # add 1, then compare s[i - maxLen] and i s[i - maxLen]
            elif i - maxLen >= 0 and s[i - maxLen :i + 1] == s[i - maxLen :i + 1][::-1]:
                sIdx = i - maxLen
                maxLen += 1

        return s[sIdx:sIdx + maxLen]



# test

s = Solution()

print s.longestPalindrome('abcdedcba')
assert s.longestPalindrome('abcdedcba') == 'abcdedcba'
assert s.longestPalindrome('abcdedcbadddd') == 'abcdedcba'
