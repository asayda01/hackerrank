#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'appendAndDelete' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. STRING s
#  2. STRING t
#  3. INTEGER k
#

def appendAndDelete(s, t, k):
    
    list_S = list(s)
    list_T = list(t)
    
    # Iterate through both list and delete elements that are common to both
    while len(list_T) > 0 and len(list_S) > 0 and list_T[0] == list_S[0]:
        list_T = list_T[1:]
        list_S = list_S[1:]
        
    # check if s in t and len(t) > len(s) 
    if len(list(t)) > len(list(s)) and len(list_S) == 0:
        return 'No' if len(list_T) > (k % len(list(s))) else 'Yes'
    
    else:
        return 'Yes' if (len(list_T) + len(list_S)) <= k else "No"

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    t = input()

    k = int(input().strip())

    result = appendAndDelete(s, t, k)

    fptr.write(result + '\n')

    fptr.close()
