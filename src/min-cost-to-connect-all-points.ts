function minCostConnectPoints(points: number[][]): number {
  // this is the kruskal algorithm
  const N = points.length;
  const edges: [dist: number, v1: number, v2: number][] = [];

  // O(E)
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const dist =
        Math.abs(points[i][0] - points[j][0]) +
        Math.abs(points[i][1] - points[j][1]);
      edges.push([dist, i, j]);
    }
  }

  // O(ElogE), increasing
  edges.sort((prev, next) => prev[0] - next[0]);
  // keep pick the least cost, check no cycle, and check we pick all node

  // in case we need to detect if cyclic, we should implement a disjoin set to union & find,
  const P = Array.from({ length: N }, (_, idx) => idx);
  const find = (i: number) => (i === P[i] ? i : find(P[i]));
  const union = (i: number, j: number): void => {
    const p1 = find(i);
    const p2 = find(j);
    P[p1] = p2;
  };

  let cost = 0;
  let edgeCounts = 0;
  for (const [dist, v1, v2] of edges) {
    if (find(v1) === find(v2)) continue;
    union(v1, v2);
    edgeCounts++;
    cost += dist;
  }
  return cost;
}
