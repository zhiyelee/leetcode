class Solution:
    # @return a string
    def longestCommonPrefix(self, strs):

        d = {}
        for i in range(len(strs)):
            val = strs[i]
            lens = len(val)
            if lens not in d:
                d[lens] = []

            d[lens].append(val)

        # for each from small to high
