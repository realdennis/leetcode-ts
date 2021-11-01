function canFinish(N: number, A: number[][]): boolean {
    // keep the in-degree state, and do the topological sort (relax the degree 0)

    // initial in-degree state / adj graph
    const degree = Array.from({ length: N }, () => 0);
    const adj: number[][] = Array.from({ length: N }, () => []);

    for (const [from, to] of A) {
        degree[to]++;
        adj[from].push(to);
    }

    // do topological sort
    for (let i = 0; i < N; i++) {
        // find the zero degree node
        const node = degree.findIndex((val) => val === 0);
        if (node === -1) return false;

        degree[node]--; // de-dup

        for (const to of adj[node]) {
            degree[to]--;
        }
    }
    return true;
}
