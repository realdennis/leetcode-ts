function checkIfPrerequisite(N: number, A: number[][], queries: number[][]): boolean[] {
    const degree = Array.from({ length: N }, () => 0);
    const adjG = Array.from<any, number[]>({ length: N }, () => []);

    for (const [F, L] of A) {
        degree[F]++;
        //  adjG[F].push(L); --> only record direct graph to prevent break the inherit logic
        adjG[L].push(F);
    }

    const sets = Array.from({ length: N }, () => new Set());

    for (let i = 0; i < N; i++) {
        const start = degree.findIndex((deg) => deg === 0);
        if (start === -1) break;

        degree[start]--; // de-dup;

        for (const adj of adjG[start]) {
            degree[adj]--;
            sets[adj].add(start);

            // inherit the parent node's parents
            for (const key of sets[start]) {
                sets[adj].add(key);
            }
        }
    }

    return queries.map(([p1, p2]) => sets[p1].has(p2));
}
