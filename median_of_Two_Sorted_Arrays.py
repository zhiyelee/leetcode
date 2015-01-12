class Solution:
        # @return a float
        def findMedianSortedArrays(self, A, B):
            lenA = len(A)
            lenB = len(B)

            # the mid for both even and odd
            k = (lenA + lenB + 1)/2
            if (lenA + lenB)%2 == 1:
                return self.findK(A, B, k)
            else:
                return (self.findK(A, B, k) + self.findK(A, B, k + 1)) * 0.5

        # find the k-th smallest number
        def findK(self, A, B, k):
            lenA = len(A)
            lenB = len(B)

            # keep lenA <= lenB
            if (lenA > lenB):
                return self.findK(B, A, k)
            if (lenA == 0):
                return B[k-1]
            if (k == 1):
                return min(A[0], B[0])

            # k/2
            # get the k smallest numbers in A+B
            midA = min(k/2, lenA)
            midB = k - midA

            if A [midA - 1] < B[midB - 1]:
                return self.findK(A[midA:], B, midB)
            else:
                return self.findK(A, B[midB:], midA)

# tests
s = Solution()
assert s.findMedianSortedArrays([1,2,3,5], [2,5]) == 2.5
assert s.findMedianSortedArrays([1,2,3,5], [2]) == 2
assert s.findMedianSortedArrays([1,2,3,5], [8]) == 3
assert s.findMedianSortedArrays([1,2], [1, 1]) == 1
assert s.findMedianSortedArrays([2,3,4,5], [1]) == 3
assert s.findMedianSortedArrays([2,3,4, 5, 6], [1]) == 3.5
