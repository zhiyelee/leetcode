class Solution:
    # @return a boolean
    def isPalindrome(self, x):
        if x < 0:
            return False
        if (x < 10):
            return True
        prefix = x
        suffix = x % 10
        p = 10
        # for 1213445443121
        # get x/10**n < 10**4 1213 and x%10**4 3121
        while suffix * suffix < x:

            prefix = x
            while prefix >= p:
                prefix = prefix / 10

            l = suffix / (p/10)
            h = prefix % 10
            if (l != h):
                return False
            p = p * 10
            suffix = x % p

        return True


# test

s = Solution()

assert s.isPalindrome(10) == False
assert s.isPalindrome(1) == True
assert s.isPalindrome(-1) == False
assert s.isPalindrome(1213) == False
assert s.isPalindrome(12133121) == True
assert s.isPalindrome(121313121) == True
