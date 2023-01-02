/*

Easy

Repeated String


There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first

letters of the infinite string.

Example

s = "abcac"
n = 10

The substring we consider is , the first characters of the infinite string. There are

occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

    s: a string to repeat
    n: the number of characters to consider

Returns

    int: the frequency of a in the substring

Input Format

The first line contains a single string,
.
The second line contains an integer,

.

Constraints

1 <= |s| <= 100
1 <= n   <= 10 ^ 12

For of the test cases,

    .

Sample Input

Sample Input 0

aba
10

Sample Output 0

7

Explanation 0
The first
letters of the infinite string are abaabaabaa. Because there are a's, we return

.

Sample Input 1

a
1000000000000

Sample Output 1

1000000000000

Explanation 1
Because all of the first
letters of the infinite string are a, we return . 

*/

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'repeatedString' function below.
     *
     * The function is expected to return a LONG_INTEGER.
     * The function accepts following parameters:
     *  1. STRING s
     *  2. LONG_INTEGER n
     */


    public static long repeatedString(String s, long n) {



         int freq=0;

         for (int i = 0; i <s.length(); i++) {
             if (s.charAt(i)=='a') {
                 freq++;
             }

         }

           long count=freq *(n/s.length());
                     long reminder=n%s.length();
          for (int i = 0; i <reminder; i++) {
             if (s.charAt(i)=='a') {
                 count++;
             }

         }
         return count;
}
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = bufferedReader.readLine();

        long n = Long.parseLong(bufferedReader.readLine().trim());

        long result = Result.repeatedString(s, n);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
