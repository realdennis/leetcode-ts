function findOrder(N: number, A: number[][]): number[] {
    const ret: number[] = [];

    const indegree: number[] = Array.from({ length: N }, () => 0);
    const adjG: number[][] = Array.from<any, number[]>({ length: N }, () => []);

    for (const [F, L] of A) {
        indegree[F]++;
        adjG[F].push(L);
        adjG[L].push(F);
    }

    for (let i = 0; i < N; i++) {
        const zeroDegreeIdx = indegree.findIndex((deg) => deg === 0);

        if (zeroDegreeIdx === -1) return [];

        ret.push(zeroDegreeIdx);
        indegree[zeroDegreeIdx]--; // de-dup;

        // relax adj
        for (const adj of adjG[zeroDegreeIdx]) {
            indegree[adj]--;
        }
    }
    return ret;
}
