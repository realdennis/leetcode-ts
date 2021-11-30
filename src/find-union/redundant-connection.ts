function findRedundantConnection(edges: number[][]): number[] {
    const N = edges.length;

    const table = Array.from({ length: N + 1 }, () => 0);
    const find = (i: number): number =>
        table[i] !== 0 && table[i] !== i ? find(table[i]) : (table[i] = i);
    const union = (i: number, j: number) => (table[find(i)] = find(j));

    let ret: number[] = [];
    for (const edge of edges) {
        const [u, v] = edge;
        if (find(u) === find(v)) {
            ret = edge;
        }
        union(u, v);
    }
    return ret;
}
