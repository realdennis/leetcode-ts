class Trie {
    private map: Map<string, Trie> = new Map();
    insert(word: string): void {
        if (word === "") {
            this.map.set("#", new Trie());
            return;
        }
        const first = word.charAt(0);
        const rest = word.substring(1);
        if (!this.map.has(first)) this.map.set(first, new Trie());

        this.map.get(first)!.insert(rest);
    }

    search(word: string): boolean {
        if (word === "") return this.map.has("#"); // check eof

        const first = word.charAt(0);
        const rest = word.substring(1);

        if (!this.map.has(first)) return false;
        return this.map.get(first)!.search(rest);
    }

    startsWith(prefix: string): boolean {
        if (prefix === "") return true; // no need for checking eof
        const first = prefix.charAt(0);
        const rest = prefix.substring(1);

        if (!this.map.has(first)) return false;
        return this.map.get(first)!.startsWith(rest);
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
