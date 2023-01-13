#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'bfs' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER m
#  3. 2D_INTEGER_ARRAY edges
#  4. INTEGER s
#

from heapq import *
def bfs(n, m, edges, s):
    vist=[-1]*(n+1)
    cnn=[[] for _ in range(n+1)]
    for st,ed in edges:
        cnn[st].append(ed)
        cnn[ed].append(st)
    cur=[(0,s)]
    while cur:
        cost,st=heappop(cur)
        if vist[st]==-1:
            vist[st]=cost
            for ed in cnn[st]:
                if vist[ed]==-1:
                    heappush(cur,(cost+6,ed))
    del vist[s]
    del vist[0]
    return vist

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    q = int(input().strip())

    for q_itr in range(q):
        first_multiple_input = input().rstrip().split()

        n = int(first_multiple_input[0])

        m = int(first_multiple_input[1])

        edges = []

        for _ in range(m):
            edges.append(list(map(int, input().rstrip().split())))

        s = int(input().strip())

        result = bfs(n, m, edges, s)

        fptr.write(' '.join(map(str, result)))
        fptr.write('\n')

    fptr.close()
