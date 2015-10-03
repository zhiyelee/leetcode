class Solution:
    # @return a list of lists of length 3, [[val1,val2,val3]]
    def threeSum(self, num):
        num.sort();
        l = len(num)
        if l < 3:
            return []

        res = []
        for i in range(l-2):
            # avoid duplicate
            if (i != 0 and num[i] == num[i - 1]):
                continue

            left = i + 1
            right = l - 1
            target = -num[i]

            while left < right:
                s = num[left] + num[right]
                if target == s:
                    res.append([-target, num[left], num[right]])

                    # avoid duplicate
                    while left < right:
                        left += 1
                        if num[left] > num[left - 1]: break

                    # avoid duplicate
                    while left < right:
                        right -= 1
                        if num[right] < num[right + 1]: break

                elif s < target:
                    # avoid duplicate
                    while left < right:
                        left += 1
                        if num[left] > num[left - 1]: break
                else:
                    # avoid duplicate
                    while left < right:
                        right -= 1
                        if num[right] < num[right + 1]: break

        return res


s = Solution()
assert s.threeSum([-1, 0, 1, 2, -1, -4]) == [[-1, -1, 2], [-1, 0, 1]]
assert s.threeSum([-1, 0, 0, 0,  1, 2]) == [[-1, 0, 1], [0, 0 ,0]]
