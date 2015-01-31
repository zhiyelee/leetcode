class Solution:
    # @return a boolean
    def isValid(self, s):
        lens = len(s)
        if s == 0 or lens % 2 != 0:
            return False

        leftSets = set('{[(')
        rightSets = {
            ']': '[',
            '}': '{',
            ')': '(',
        }

        if s[0] in rightSets:
            return False

        stack = []

        for i in range(lens):
            val = s[i]
            if val in leftSets:
                stack.append(val)
            elif val in rightSets and rightSets[val] == stack[len(stack) - 1]:
                stack.pop()
            else:
                return False

        if len(stack) != 0:
            return False
        return True

s = Solution()
assert s.isValid('[[[{{}}]]]') == True
assert s.isValid('[[[{}}]]]') == False
assert s.isValid('[[') == False
assert s.isValid('][') == False


