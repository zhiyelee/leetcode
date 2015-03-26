#! /usr/bin/env bash

# Read from the file file.txt and output all valid phone numbers to stdout.
while read num
do
    if [[ "$num" =~ ^\([0-9]{3}\)\ [0-9]{3}-[0-9]{4}$ ]] || [[ "$num" =~ ^[0-9]{3}-[0-9]{3}-[0-9]{4}$ ]];then
        echo $num
    fi
done < file.txt
