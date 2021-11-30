function isBipartite(graph: number[][]): boolean {
    const N = graph.length;
    const table = Array.from({ length: N }, () => -1); // means no color

    for (let i = 0; i < N; i++) {
        if (table[i] === -1) {
            const coloredAdj = graph[i].find((val) => val !== 0) || 1;
            table[i] = 1 - coloredAdj;
        }

        for (const adj of graph[i]) {
            if (table[adj] === -1) table[adj] = 1 - table[i];
            else if (table[adj] === table[i]) return false;
        }
    }
    return true;
}
