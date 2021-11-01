function checkIfPrerequisite(
    numCourses: number,
    prerequisites: number[][],
    queries: number[][]
): boolean[] {
    const N = numCourses;
    const degree = Array.from({ length: N }, () => 0); // collect the outdegree;
    const graph: number[][] = Array.from({ length: N }, () => []); // coleect avl incoming node;
    const preSet: Set<number>[] = Array.from({ length: N }, () => new Set());
    for (const pair of prerequisites) {
        const [from, to] = pair;
        graph[to].push(from);
        degree[from]++;
    }

    // start from out degree 0 and keep collect the prerequisites
    for (let i = 0; i < N; i++) {
        const start = degree.findIndex((val) => val === 0);
        if (start === -1) break;
        degree[start]--;
        const queue = Array.from(graph[start]);
        while (queue.length !== 0) {
            const node = queue.shift()!;
            degree[node]--;
            preSet[node].add(start);
            for (const key of preSet[start]) {
                preSet[node].add(key);
            }
        }
    }
    return queries.map((pair) => preSet[pair[0]].has(pair[1]));
}
