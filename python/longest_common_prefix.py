class Solution:
    # @return a string
    def longestCommonPrefix(self, strs):
        lenstrs = len(strs)
        if lenstrs == 0:
            return ''
        if lenstrs == 1:
            return strs[0]

        d = {}
        s = len(strs[0])
        for i in range(len(strs)):
            val = strs[i]
            lens = len(val)
            if lens < s:
                s = lens

            if lens not in d:
                d[lens] = []

            d[lens].append(val)

        if s == 0:
            return ''
        # forEach from small to high
        search = d[s][0]
        for i in range(len(search), 0, -1):
            val = search[:i]
            isLongest = True
            for key in d:
                contain = self.contains(d[key], val)
                if not contain:
                    isLongest = False
                    break
            if isLongest:
                return val

        return ''

    def contains(self, strs, s):
        for i in range(len(strs)):
            val = strs[i]
            if val.find(s) != 0:
                return False

        return True



s = Solution()
assert s.longestCommonPrefix(['abcded', 'abcdef', 'abc', 'abc', 'abd']) == 'ab'
assert s.longestCommonPrefix(['abcded', 'abcdef', 'abc', 'a', 'abd']) == 'a'
assert s.longestCommonPrefix(['', 'abcdef', 'abc', 'a', 'abd']) == ''
assert s.longestCommonPrefix(['mmm', 'abcdef', 'abc', 'a', 'abd']) == ''
