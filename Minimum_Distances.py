#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'minimumDistances' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY a as parameter.
#

def minimumDistances(a):
    
    min_dist =len(a)
    dict1 = {}
    
    for i in range(len(a)):

        if a[i] not in dict1:
            dict1[ a[i] ] = i
        else:
            min_dist = min( min_dist , abs( i - dict1[ a[i] ] ) )

    return -1 if min_dist == len(a) else min_dist
        

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    a = list(map(int, input().rstrip().split()))

    result = minimumDistances(a)

    fptr.write(str(result) + '\n')

    fptr.close()
