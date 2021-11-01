function searchMatrix(matrix: number[][], target: number): boolean {
    const M = matrix.length;
    const N = matrix[0].length;

    let m = 0,
        n = N - 1;

    while (n >= 0 && m < M && matrix[m][n] !== target) {
        if (matrix[m][n] > target) {
            if (n === 0) return false;
            n--;
        } else {
            if (m + 1 >= M) return false;
            m++;
        }
    }
    return matrix[m][n] === target;
}
