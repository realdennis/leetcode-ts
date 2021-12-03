export default {};

function longestCommonPrefix(strs: string[]): string {
    class TrieNode {
        isEnd = false;
        mem: Map<string, TrieNode> = new Map();
    }

    class Trie {
        root: TrieNode = new TrieNode();
        insert = (str: string): void => {
            let ptr = this.root;
            for (const ch of str) {
                if (!ptr.mem.has(ch)) ptr.mem.set(ch, new TrieNode());
                ptr = ptr.mem.get(ch)!;
            }
            ptr.isEnd = true;
        };
        searchPrefix = (): string => {
            let ptr = this.root;
            let ret = "";
            while (
                ptr &&
                ptr.mem.size === 1 /* multiple childs */ &&
                ptr.isEnd === false /* end condition*/
            ) {
                const key = ptr.mem.keys().next().value;
                ret += key;
                ptr = ptr.mem.get(key)!;
            }
            return ret;
        };
    }
    const trie = new Trie();

    for (const str of strs) trie.insert(str);

    return trie.searchPrefix();
}
