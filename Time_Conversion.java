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
     * Complete the 'timeConversion' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING s as parameter.
     */

    public static String timeConversion(String s) {
        String hours = s.substring(0,2);
        String minutes = s.substring(3,5);
        String seconds = s.substring(6,8);
        String meridiem = s.substring(8);
        
        if (meridiem.equals("AM")) {
            if (hours.equals("12")) {
                hours = "00";
            }
        } else { 
            if (!hours.equals("12")) {
                hours = String.valueOf(
                    Integer.parseInt(hours) + 12
                );
            }
        }
        
        return hours + ":" + minutes + ":" + seconds;
        
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = bufferedReader.readLine();

        String result = Result.timeConversion(s);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
