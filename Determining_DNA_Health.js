'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function Node() {
    this.index = [];
    this.indexH = [];
    this.children = {};
}

function Trie() {
    var root = new Node();
    function add(word, node, index, health) {
        var char, previousHealth = 0, len;
        if (word === '') {
            len = node.index.length;
            if (len) {
                previousHealth = node.indexH[len-1];
            }
            node.index.push(index);
            node.indexH.push(health + previousHealth);
            return;
        }
        char = word[0];
        if (!node.children[char]) {
            node.children[char] = new Node();
        }
        add(word.substr(1), node.children[char], index, health);
    }
    return {
        add: function(word, index, health) {
            add(word, root, index, health);
        },
        getRoot: function() {
            return root;
        }
    }
}

function findIndex(arr, start, end, val) {
    var index = Math.floor((end - start) / 2) + start;
    if (arr[index] === val) return index;
    if (arr[start] === val) return start;
    if (arr[end] === val) return end;
    if (arr[index] > val) {
        end = index;
    } else {
        start = index;
    }
    if (end - start <= 1) {
        if (arr[end] < val) {
            return end;
        }
        return start;
    }
    return findIndex(arr, start, end, val);
}

function main() {
    const n = parseInt(readLine(), 10);

    const genes = readLine().split(' ');

    const health = readLine().split(' ').map(healthTemp => parseInt(healthTemp, 10));
    const s = parseInt(readLine(), 10);
    var trie = new Trie();
    var min = null;
    var max = null;

    genes.forEach((gene, index) => {
        trie.add(gene, index, health[index]);
    });
    for (let sItr = 0; sItr < s; sItr++) {
        const firstLastd = readLine().split(' ');

        const first = parseInt(firstLastd[0], 10);

        const last = parseInt(firstLastd[1], 10);

        const d = firstLastd[2];
        var len = d.length;
        var dnaHealth = 0;

        var getSum = function(cn) {
            var cnIndexLen = cn.index.length;
            var startIndex, endIndex;
            if (cnIndexLen === 0) return;
            startIndex = findIndex(cn.index, 0, cnIndexLen - 1, first - 1);
            endIndex = findIndex(cn.index, 0, cnIndexLen - 1, last);
            if (cn.index[endIndex] <= last) {
                dnaHealth += cn.indexH[endIndex];
            }
            if (cn.index[startIndex] < first) {
                dnaHealth -= cn.indexH[startIndex];
            }
        };

        for (let i = 0; i < len; i++) {
            var iter = i;
            var node = trie.getRoot();
            do {
                node = node.children[d[iter++]];
                if (!node) {
                    break;
                }
                getSum(node);
            } while(iter < len);
        }

        min = min === null ? dnaHealth : Math.min(min, dnaHealth);
        max = max === null ? dnaHealth : Math.max(max, dnaHealth);
    }
    console.log(`${min} ${max}`)
}