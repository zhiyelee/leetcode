class Solution:
    # @param n, an integer
    # @return an integer
    def climbStairs(self, n):
        if (n == 1):
            return 1
        count = 0
        for i in range(n + 1):
            m = n - i
            if m % 2 == 0:
                count += self.getAn_m(n, m/2)

        return count

    # A_m/n+1
    def getAn_m(self, n, m):
        if m > n:
            return self.getAn_m(m, n)
        anm = 1
        amm = 1
        n = n + 1
        for i in range(m):
            anm *= n - i
            amm * = i + 1

        return anm/amm


s = Solution()
