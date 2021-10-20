class TrieNode {
	children: Map<string, TrieNode> = new Map();
}
class Trie {
	root: TrieNode = new TrieNode();
	insert = (word: string): void => {
		let node = this.root;
		for (const ch of word) {
			if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
			node = node.children.get(ch);
		}
		node.children.set("#", new TrieNode()); // EOF, de-dup
	};
}
function longestCommonPrefix(strs: string[]): string {
	const trie = new Trie();
	for (const word of strs) trie.insert(word);

	let ret = "";

	let node = trie.root;

	while (node && node.children.size === 1) {
		const cand = node.children.keys().next().value;
		if (cand !== "#") ret += cand;
		node = node.children.get(cand);
	}

	return ret;
}
