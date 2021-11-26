function canFinish(N: number, A: number[][]): boolean {
    const degree = Array.from({ length: N }, () => 0);
    const adjG: number[][] = Array.from({ length: N }, () => []);

    for (const [F, L] of A) {
        degree[F]++;
        adjG[F].push(L);
        adjG[L].push(F);
    }

    for (let i = 0; i < N; i++) {
        const zDeg = degree.findIndex((deg) => deg === 0);
        if (zDeg === -1) return false;

        degree[zDeg]--; // de-dup

        for (const adj of adjG[zDeg]) degree[adj]--; // relax adjacent nodes
    }
    return true;
}
