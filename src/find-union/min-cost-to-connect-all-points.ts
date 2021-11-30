function minCostConnectPoints(points: number[][]): number {
    const N = points.length;

    // priority queue: collect the edges
    const minQueue = new MinPriorityQueue({
        priority: (info: number[]) => info[0],
    });

    // utils: distance calc and union-find
    const getDist = (node1: number[], node2: number[]): number =>
        Math.abs(node1[0] - node2[0]) + Math.abs(node1[1] - node2[1]);
    const table = Array.from({ length: N }, () => -1);
    const find = (n: number): number =>
        table[n] !== n && table[n] !== -1 ? find(table[n]) : (table[n] = n);
    const union = (i: number, j: number) => (table[find(i)] = j);

    // return value
    let cost = 0;

    // Collect edges in heap O(ElogE)
    for (let i = 0; i < N; i++)
        for (let j = i + 1; j < N; j++) minQueue.enqueue([getDist(points[i], points[j]), i, j]);

    for (let i = 0; i < N - 1; i++) {
        // edge counts = point counts - 1
        const candidate = minQueue.dequeue().element;
        const [d, u, v] = candidate;
        if (find(u) === find(v)) {
            i--;
            continue;
        }
        union(u, v);
        cost += d;
    }
    return cost;
}
