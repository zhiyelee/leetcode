class Solution:
    # @return a boolean
    def isPalindrome(self, x):
        if x < 0:
            return False
        if (x < 10):
            return 1
        prefix = x
        suffix = x % 10
        lens = 1
        # for 1213445443121
        # get x/10**n < 10**4 1213 and x%10**4 3121
        while suffix * suffix < x:

            prefix = x
            while prefix >= self.power(lens):
                prefix = prefix / 10

            l = suffix / (self.power(lens - 1))
            h = prefix % 10
            if (l != h):
                return False
            lens += 1
            suffix = x % self.power(lens)

        return True
    def power(self, n):
        res = 1
        for i in range(n):
            res *= 10

        return res


# test

s = Solution()

assert s.isPalindrome(10) == False
assert s.isPalindrome(1) == True
assert s.isPalindrome(-1) == True
assert s.isPalindrome(1213) == False
assert s.isPalindrome(-2147447412) == False
assert s.isPalindrome(12133121) == True
assert s.isPalindrome(121313121) == True
assert s.isPalindrome(-121313121) == True
