class Solution:
    # @param n, an integer
    # @return an integer
    def climbStairs(self, n):
        if (n == 1):
            return 1
        if (n == 2):
            return 2

        return self.climbStairs(n - 1) + self.climbStairs(n - 2)



# test
s = Solution()
#assert s.climbStairs(1)  == 1
#assert s.climbStairs(2)  == 2
#assert s.climbStairs(3)  == 3
#assert s.climbStairs(4)  == 5
#assert s.climbStairs(5)  == 8
assert s.climbStairs(6)  == 13
