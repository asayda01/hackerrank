#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'extraLongFactorials' function below.
#
# The function accepts INTEGER n as parameter.
#

def extraLongFactorials(n):
    ausgabe = n
    for q in range(1, n):
        ausgabe *= (n - q)
    return print(ausgabe)

if __name__ == '__main__':
    n = int(input().strip())

    extraLongFactorials(n)
