#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'breakingRecords' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY scores as parameter.
#

def breakingRecords(scores):
    min1 = scores[0]
    max1 = scores[0]
    count_min1 = 0
    count_max1 = 0
    for i in scores[1:]:
        if max1 < i and min1 < i:
            max1 = i
            count_max1 +=1
        elif max1 > i and min1 > i:
            min1 = i
            count_min1 +=1
    return count_max1,count_min1

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    scores = list(map(int, input().rstrip().split()))

    result = breakingRecords(scores)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
