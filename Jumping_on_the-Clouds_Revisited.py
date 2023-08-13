#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the jumpingOnClouds function below.
def jumpingOnClouds(c, k):
    
    clouds = [c[0]]
    jumps = 1    
    
    while (1 + (jumps * k)) % n != 1:
        clouds.append(c[(jumps * k) % n])        
        jumps += 1
        
    return 100 - jumps - (sum(clouds)*2)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    nk = input().split()

    n = int(nk[0])

    k = int(nk[1])

    c = list(map(int, input().rstrip().split()))

    result = jumpingOnClouds(c, k)

    fptr.write(str(result) + '\n')

    fptr.close()
