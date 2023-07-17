import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.util.Arrays;

public class Solution {

    private static String[] genes;
    private static int[] health;

    public static void main(String[] args) throws Exception {
        PrintStream out = new PrintStream(System.out);
        
        long startMillis = System.currentTimeMillis();
        
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(in.readLine());

        genes = new String[n];
        int longestKey = 0;
        
        String[] genesItems = in.readLine().split(" ");

        Trie trie = new Solution().new Trie();
        for (int i = 0; i < n; i++) {
            String genesItem = genesItems[i];
            genes[i] = genesItem;
            
            trie.insert(genes[i], i);
            
            if (genes[i].length() > longestKey)
                longestKey = genes[i].length();
        }

        health = new int[n];

        String[] healthItems = in.readLine().split(" ");
        
        for (int i = 0; i < n; i++) {
            int healthItem = Integer.parseInt(healthItems[i]);
            health[i] = healthItem;
        }

        //out.println("Longest key: " + longestKey);
        //out.println("Loading: " + (System.currentTimeMillis() - startMillis)/1000f);
        startMillis = System.currentTimeMillis();
        
        int s = Integer.parseInt(in.readLine());
        long maxH = 0, minH = Long.MAX_VALUE;
        
        for (int sItr = 0; sItr < s; sItr++) {
            String[] firstLastd = in.readLine().split(" ");

            int first = Integer.parseInt(firstLastd[0]);
            int last = Integer.parseInt(firstLastd[1]);

            String d = firstLastd[2];
            long total = 0;
            int keyLen = d.length();
            
            for (int i = 0; i < keyLen; i++) {
                total += trie.find(d.substring(i, keyLen > longestKey && i + longestKey < keyLen? i + longestKey : keyLen), first, last);
            }
            
            if (total > maxH)
                maxH = total;
            
            if (total < minH)
                minH = total;
        }
        
        in.close();
        out.println(minH + " " + maxH);
        out.close();
    }
    
    class Trie {
        private final short SIZE = 26;
        private TrieNode root;
        
        public Trie () {
            this.root = new TrieNode();
        }
        
        class TrieNode {
            private TrieNode[] children = new TrieNode[SIZE]; 
            private int index[];
            private boolean isEnd;
            
            public TrieNode(){
                isEnd = false;
            }
            
            @Override
            public String toString(){
                return (index != null? Arrays.toString(index) + " " : "") 
                        + Arrays.toString(Arrays.stream(children).filter(p -> p != null).toArray());
            }
        }
        
        public void insert(String key, int index) {
            int arrayPos;
            
            TrieNode node = root;
            
            for (int i = 0; i < key.length(); i++) {
                arrayPos = key.charAt(i) - 'a';
                
                if (node.children[arrayPos] == null) {
                    node.children[arrayPos] = new TrieNode();
                }
                
                node = node.children[arrayPos];
            }
            
            if (node.index == null) {
                node.index = new int[1];
            } else {
                node.index = Arrays.copyOf(node.index, node.index.length + 1);
            }
            
            node.index[node.index.length - 1] = index;
            node.isEnd = true;
        }
        
        public long find(String key, int start, int end) {
            int arrayPos;
            
            TrieNode node = root;
            long result = 0;
            int keyLen = key.length();
            
            for (int i = 0; i < keyLen; i++) {
                arrayPos = key.charAt(i) - 'a';
                
                if (node.children[arrayPos] != null) {
                    node = node.children[arrayPos];
                    
                    if (node.isEnd 
                            && (   start <= node.index[node.index.length - 1] 
                                || end >= node.index[0])) {
                        
                        int sI = -1, eI = -1;
                        for (int j = 0, k = node.index.length - 1; j < node.index.length && k >= 0; j++, k--) {
                            if (sI == -1) {
                                if (node.index[j] >= start)
                                    sI = j;
                                else if (node.index[k] < start && k + 1 < node.index.length && node.index[k + 1] >= start)
                                    sI = k + 1;
                            }
                            
                            if (eI == -1) {
                                if (node.index[k] <= end)
                                    eI = k;
                                else if (node.index[j] > end && j - 1 >= 0 && node.index[j - 1] <= end)
                                    eI = j - 1;
                            }
                            
                            if (j == k || (sI != -1 && eI != -1))
                                break;
                        }
                        
                        if (sI != -1 && eI != -1) {
                            for (int j = sI; j <= eI; j++) {
                                result += health[node.index[j]];
                            }
                        }
                    }
                } else
                    break;
            }
            
            return result;
        }
        
        @Override
        public String toString() {
            return root.toString();
        }
    }
}