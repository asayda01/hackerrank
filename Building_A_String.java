import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
    
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for(int t=0;t<T;t++){
            int N = sc.nextInt();
            int A = sc.nextInt();
            int B = sc.nextInt();
            String S = sc.next();
            System.out.println( buildStringCost(N,A,B,S) );
        }
    }
    
    public static int buildStringCost(int N, int A, int B, String S){
        int[] dp = new int[N];
        dp[0] = A;
        int lastL = 0;
        for(int k=1;k<N;++k){
            dp[k] = dp[k-1]+A;
            int L = lastL+1;
            while(L>0){
                String cur = S.substring(k-L+1, k+1);
                int idx = S.substring(0, k-L+1).indexOf(cur);
                if( -1==idx )
                    L--;
                else{
                    dp[k] = Math.min(dp[k], dp[k-L]+B);
                    break;
                }
            }
            lastL = L;
        }
        return dp[N-1];
    }
}