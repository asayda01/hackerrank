#!/bin/python3

import math
import os
import random
import re
import sys
import statistics
from statistics import mode
#
# Complete the 'migratoryBirds' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY arr as parameter.
#

from collections import Counter
def migratoryBirds(arr):
    mode1 = Counter(sorted(arr)).most_common()
    return list(mode1)[0][0]

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr_count = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    result = migratoryBirds(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
