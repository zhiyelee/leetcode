class Solution:
    # @return a tuple, (index1, index2)
    def twoSum(self, num, target):
        length = len(num)
        # use dict: value: index + 1
        # since there is only one solution, the right value must not be duplicated
        dic = {}
        for i in xrange(0, length):
            val = num[i]
            if (target - val) in dic:
                return (dic[target - val], i + 1)
            dic[val] = i + 1



## test code
# num=[2, 7, 11, 15]
# t= 26
# s = Solution()
# print s.twoSum(num, t)
