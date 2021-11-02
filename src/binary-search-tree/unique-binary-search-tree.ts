function numTrees(n: number): number {
    /**
    G[3] = 5 = 
        G[0] * G[2]
        G[1] * G[1]
        G[2] * G[0]
        
    G[2] = G[0] * G[1] + G[1]*G[0]
    **/
    const G = Array.from({ length: n + 1 }, () => 0);

    G[0] = 1;
    G[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            G[i] += G[j] * G[i - j - 1];
        }
    }
    return G[n];
}
