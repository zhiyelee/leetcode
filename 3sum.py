class Solution:
    # @return a list of lists of length 3, [[val1,val2,val3]]
    def threeSum(self, num):
        l = len(num)
        if l < 3:
            return []

        res = []
        for i in range(l):
            for j in range(i + 1, l):
                for k in range(i + 2, l):
                    if num[i] + num[j] + num[k] == 0 and num[i] <= num[j] and num[j] <= num[k]:

                        item = [num[i], num[j], num[k]]
                        if item not in res:
                            res.append([num[i], num[j], num[k]]);
        return res


s = Solution()
print s.threeSum([-1, 0, 1, 2, -1, -4])
