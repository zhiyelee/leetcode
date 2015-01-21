class Solution:
    # @param n, an integer
    # @return an integer
    def climbStairs(self, n):
        if (n == 1):
            return 1
        count = 0
        for i in range(n + 1):
            m = n - i
            if m == 0:
                count += 1
            elif m % 2 == 0:
                count += self.getAn_m(i, m/2)
                print i, m ,count

        return count

    # A_m/n+1
    def getAn_m(self, n, m):
        if m == 0 or n == 0:
            return 1
        if m > n:
            return self.getAn_m(m, n)
        anm = 1
        amm = 1
        n = n + 1
        for i in range(m):
            anm *= n - i
            amm *= i + 1

        return anm/amm


# test
s = Solution()
#assert s.climbStairs(1)  == 1
#assert s.climbStairs(2)  == 2
#assert s.climbStairs(3)  == 3
#assert s.climbStairs(4)  == 5
#assert s.climbStairs(5)  == 8
assert s.climbStairs(6)  == 13
