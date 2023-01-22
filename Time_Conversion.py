#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def timeConversion(s):
    hh,mm,ss = s[0:2],s[3:5],s[6:8]
    typ = s[-2:]
    if hh == "12" and typ == "PM":
        hh = "12"
    elif hh == "12" and typ == "AM":
        hh = "00"
    elif typ == "PM":
        hh = int(hh) + 12
    return (str(hh) + ":" + mm + ":" + ss)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()
