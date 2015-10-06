class Solution:
    # @param a list of integers
    # @return an integer
    def removeDuplicates(self, A):
        # 1 1 2 2 2 2 3 4 5
        i = 0
        val = None
        while i < len(A):
            if val == A[i]:
                # A.pop(i)
                A[i-1:i+1] = [A[i-1]]
            else:
                val = A[i]
                i += 1

        print A
        return len(A)

s = Solution()

assert s.removeDuplicates([1,1,2,2,3,3,4,5,6]) == 6
assert s.removeDuplicates([1,1]) == 1
assert s.removeDuplicates([]) == 0
