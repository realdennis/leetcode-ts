/**
Top K frequency
    1. Freq map to keep each word's freq
    2. Sort by freq
        2.1 if the freq equal, use lexical order
		2.1 if no, decreasing (non increasing)
    return the first Kth
**/

function topKFrequent(words: string[], k: number): string[] {
    // Step#1 T:O(N) S:O(N)
    const freq: Map<string, number> = new Map();
    words.forEach((word) => freq.set(word, (freq.get(word) || 0) + 1));

    // Step#2 T:O(NlogN) S:O(N)
    // using sorting or priority queue
    const sorted = [...freq].sort((prev, next) =>
        next[1] === prev[1] ? prev[0].localeCompare(next[0]) : next[1] - prev[1]
    );

    // S:O(N)
    return sorted.map((entry) => entry[0]).slice(0, k);
}
