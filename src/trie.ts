class Trie {
	private map: Map<string, Trie> = new Map();
	private EOF: string = "eof";
	insert(word: string): void {
		if (word.length === 0) {
			if (!this.map.has(this.EOF)) this.map.set(this.EOF, new Trie());
			return;
		}
		const first = word.charAt(0);
		if (!this.map.has(first)) this.map.set(first, new Trie());
		const firstTrie = this.map.get(first);
		firstTrie.insert(word.substring(1));
	}

	search(word: string): boolean {
		if (word.length === 0) return this.map.has(this.EOF);

		const first = word.charAt(0);
		if (!this.map.has(first)) return false;
		return this.map.get(first).search(word.substring(1));
	}

	startsWith(prefix: string): boolean {
		const first = prefix.charAt(0);
		if (!this.map.has(first)) return false;

		if (prefix.length === 1) return true;
		return this.map.get(first).startsWith(prefix.substring(1));
	}
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
