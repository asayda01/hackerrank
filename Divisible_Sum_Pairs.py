#!/bin/python3

import math
import os
import random
import re
import sys



def divisibleSumPairs(n, k, ar):
    pairs = [(ar[i],ar[j]) for i in range(n-1) for j in range(i+1,n)]
    return sum([(pair[0] + pair[1]) % k == 0 for pair in pairs])
    
    
    
    
    
    
    
    
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    k = int(first_multiple_input[1])

    ar = list(map(int, input().rstrip().split()))

    result = divisibleSumPairs(n, k, ar)

    fptr.write(str(result) + '\n')

    fptr.close()
