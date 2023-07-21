#!/bin/python3

import os
import sys
import re

#
# Complete the buildString function below.
#

def buildString(a, b, s):
    N = len(s)

    cost = [0]*N

    cost[0] = a
    index = 1
    for i in range(1,N):
        if s[index:i+1] not in s[:index] or index == -1:
            index = findLongestOccurence(s[:i+1], i)
        if index==-1:
            cost[i] = cost[i-1] + a
        else:
            cost[i] = min(cost[i-1]+a, cost[index-1]+b)
    return cost[-1]

def findLongestOccurence(s, index):
    indexHasChanged = False
    while s[index:] in s[:index]:
        index -= 1
        indexHasChanged = True
    return -1 if not indexHasChanged else index + 1



if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input())

    for t_itr in range(t):
        nab = input().split()

        n = int(nab[0])

        a = int(nab[1])

        b = int(nab[2])

        s = input()
        
        result =  buildString(a, b, s)

        fptr.write(str(result) + '\n')

    fptr.close()