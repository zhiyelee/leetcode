#! /usr/bin/env bash

# Read from the file file.txt and output all valid phone numbers to stdout.
# # first version, with while
# while read num
# do
#     if [[ "$num" =~ ^\([0-9]{3}\)\ [0-9]{3}-[0-9]{4}$ ]] || [[ "$num" =~ ^[0-9]{3}-[0-9]{3}-[0-9]{4}$ ]];then
#         echo $num
#     fi
# done < file.txt

# sed version

# sed -nE '/^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$/p' file.txt

# grep version
grep -E '^(\([0-9]{3}\) |[0-9]{3}\-)[0-9]{3}\-[0-9]{4}$' file.txt
