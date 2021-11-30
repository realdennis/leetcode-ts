export {};
function isBipartite(graph: number[][]): boolean {
    const N = graph.length;
    const table = Array.from({ length: N }, () => -1);

    let ret = true;
    const visited: Set<number> = new Set();
    const backtracking = (i: number = 0, c: number = 0): void => {
        if (!ret) return;
        if (visited.has(i)) {
            if (c !== table[i]) ret = false;
            return;
        }
        visited.add(i);

        // below is not visited node
        table[i] = c;
        for (const adj of graph[i]) backtracking(adj, 1 - c);
    };

    for (let i = 0; i < N; i++) {
        if (visited.has(i)) continue;
        backtracking(i, 0);
    }
    return ret;
}
