class Solution:
    # @return an integer
    def atoi(self, str):
        str = str.lstrip(' ').rstrip(' ');

        if str == '':
            return 0

        sign = 1
        if str[0] == '-':
            sign = -1
            str = str[1:]
        elif str[0] == '+':
            str = str[1:]

        lens = len(str)
        if lens == 0:
            return 0


        s = ''
        for i in range(0, lens):
            if str[i].isdigit():
                s = s + str[i]
            else:
                break

        if s == '':
            return 0

        res = sign * int(s)

        if res > 2147483647:
            return 2147483647
        elif res < -2147483648:
            return -2147483648
        else:
            return res


s = Solution()

assert s.atoi('') == 0
assert s.atoi('aaa') == 0
assert s.atoi('1213fa ') == 1213
assert s.atoi('+1213fa') == 1213
assert s.atoi('-1213fa') == -1213
assert s.atoi('2147483648') == 2147483647
assert s.atoi('+-2') == 0
