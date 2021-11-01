function isValidSudoku(board: string[][]): boolean {
    const N = board.length;

    const valid = (i: number, j: number): boolean => {
        const rowSet: Set<string> = new Set();
        // row validate
        for (let k = 0; k < N; k++) {
            if (board[i][k] === ".") continue;
            if (rowSet.has(board[i][k])) return false;
            rowSet.add(board[i][k]);
        }

        const colSet: Set<string> = new Set();
        // col validate
        for (let k = 0; k < N; k++) {
            if (board[k][j] === ".") continue;
            if (colSet.has(board[k][j])) return false;
            colSet.add(board[k][j]);
        }

        const boxSet: Set<string> = new Set();
        // box validate
        const istart = Math.floor(i / 3) * 3;
        const jstart = Math.floor(j / 3) * 3;
        for (let ii = istart; ii < istart + 3; ii++) {
            for (let jj = jstart; jj < jstart + 3; jj++) {
                if (board[ii][jj] === ".") continue;
                if (boxSet.has(board[ii][jj])) return false;
                boxSet.add(board[ii][jj]);
            }
        }
        return true;
    };

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] === ".") {
                if (valid(i, j) === false) return false;
            }
        }
    }
    return true;
}
