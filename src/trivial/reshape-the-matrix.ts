function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const M = mat.length,
        N = mat[0].length;
    if (M * N !== r * c) return mat; // illegal case

    const flat = mat.reduce((prev, next) => [...prev, ...next], []);
    return Array.from({ length: r }, () => Array.from({ length: c }, () => flat.shift() as number));
}
