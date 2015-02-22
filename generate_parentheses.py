class Solution:
    # @param an integer
    # @return a list of string
    def generateParenthesis(self, n):
        if (n <= 0):
            return []

        arr = []
        self.g(n, 0, 0, '', arr)
        return arr
    def g(self, n, left, right, s, arr):
        if left < right:
            return

        if (left == right and left == n):
            arr.append(s)
            return
        if (left == n):
            self.g(n,left, right + 1, s + ')', arr)
            return

        self.g(n, left + 1, right, s + '(', arr);
        self.g(n, left, right + 1, s + ')', arr);


s = Solution()
assert s.generateParenthesis(3) == ["((()))", "(()())", "(())()", "()(())", "()()()"]
assert s.generateParenthesis(2) == ["(())", "()()"]
assert s.generateParenthesis(4) != ["(())", "()()"]
