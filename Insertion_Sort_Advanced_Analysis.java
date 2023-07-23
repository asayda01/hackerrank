import java.io.*;
import java.util.*;

public class Solution {
    private static final int MAXVAL = 10000000;
    private static int[] array = new int[MAXVAL+1];

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc = new Scanner(System.in);
        int testCaseCount = sc.nextInt();
        for (int i = 0; i < testCaseCount; i++) {
            int size = sc.nextInt();
            long sum = 0;
            Arrays.fill(array, 0);
            for (int j = 0; j < size; j++) {
                 sum += assign(sc.nextInt(), array, j);
            }
            System.out.println(sum);
        }
    }
    private static int assign(int x, int[] prefixSums, int current) {
        int n = read(prefixSums, x);
        update(prefixSums, x);
        return current-n;
    }

    private static int read(int[] prefixSums, int x) {
        int nrt=0;
        while(x>0) {
            nrt += prefixSums[x];
            x -= (x&(-x));
        }
        return nrt;
    }

    private static void update(int[] prefixSums, int x) {
        while(x <= MAXVAL) {
            prefixSums[x]++;
            x += (x&(-x));
        }
    }
}