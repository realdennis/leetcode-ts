function maxPoints(points: number[][]): number {
  if (points.length === 1) return 1;

  const N = points.length;
  const slope: Map<number, number> = new Map();

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];

      const xInterval = x1 - x2;
      const yInterval = y1 - y2;

      const _slope =
        xInterval === 0 ? Number.MAX_SAFE_INTEGER : yInterval / xInterval;

      slope.set(_slope, (slope.get(_slope) || 0) + 1);
    }
  }

  // console.log(slope)
  const maxSlope = [...slope.keys()].reduce((prev, next) =>
    slope.get(prev)! > slope.get(next)! ? prev : next
  );

  const constant: Map<number, number> = new Map();

  for (const point of points) {
    const [x, y] = point;

    const _constant =
      maxSlope === Number.MAX_SAFE_INTEGER
        ? x
        : Number((y - maxSlope * x).toFixed(10));
    constant.set(_constant, (constant.get(_constant) || 0) + 1);
  }

  return Math.max(...constant.values());
}
