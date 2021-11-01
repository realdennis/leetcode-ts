function findOrder(N: number, A: number[][]): number[] {
  const ret = [];

  // do topological sort using in-degree

  const degree = Array.from({ length: N }, () => 0); // indegree
  const adj: number[][] = Array.from({ length: N }, () => []);

  for (const [from, to] of A) {
    degree[to]++;
    adj[from].push(to);
  }

  // topological sort

  for (let i = 0; i < N; i++) {
    const node = degree.findIndex((val) => val === 0);
    if (node === -1) return []; // impossible to finish

    degree[node]--; // de-dup
    ret.push(node);

    for (const next of adj[node]) degree[next]--;
  }

  return ret.reverse();
}
