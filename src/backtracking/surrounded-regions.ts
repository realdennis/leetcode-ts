/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const M = board.length;
    const N = board[0].length;

    const visited = Array.from({ length: M }, () => Array.from({ length: N }, () => false));

    let collection: number[][] = [];
    let isBorder = false;
    const dfs = (i: number, j: number): void => {
        if (i < 0 || j < 0 || i >= M || j >= N) return;
        if (visited[i][j]) return;
        if (board[i][j] === "X") return;

        visited[i][j] = true;
        collection.push([i, j]);
        if (i === 0 || j === 0 || i === M - 1 || j === N - 1) {
            isBorder = true;
        }
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    };

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            collection = [];
            isBorder = false;
            dfs(i, j);
            if (isBorder) continue;
            for (let pos of collection) {
                const [x, y] = pos;
                board[x][y] = "X";
            }
        }
    }
}
