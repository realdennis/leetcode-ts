/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const M = board.length;
    const N = board[0].length;

    const visited = Array.from({ length: M }, () => Array.from({ length: N }, () => false));

    let collection: number[][] = [];
    let isBorder = false;
    const dfs = (pos: number[]): void => {
        const [x, y] = pos;
        if (x < 0 || y < 0 || x >= M || y >= N) return;
        if (visited[x][y]) return;
        if (board[x][y] === "X") return;

        visited[x][y] = true;
        collection.push([x, y]);
        if (x === 0 || y === 0 || x === M - 1 || y === N - 1) {
            isBorder = true;
        }
        dfs([x - 1, y]);
        dfs([x + 1, y]);
        dfs([x, y - 1]);
        dfs([x, y + 1]);
    };

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            collection = [];
            isBorder = false;
            dfs([i, j]);
            if (isBorder) continue;
            for (let col of collection) {
                const [x, y] = col;
                board[x][y] = "X";
            }
        }
    }
}

const q = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
];
solve(q);
console.log(q);
