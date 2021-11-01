/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    const isLegal = (row: number, col: number): boolean => {
        const test = (strs: string[], target: string): boolean =>
            strs.filter((val) => val === target).length === 1;
        const target = board[row][col];

        const rowItems = board[row];
        if (!test(rowItems, target)) return false;

        const colItems = board.map((_row) => _row[col]);
        if (!test(colItems, target)) return false;

        const boxRowStart = Math.floor(row / 3) * 3;
        const boxColStart = Math.floor(col / 3) * 3;
        const boxItems = board
            .slice(boxRowStart, boxRowStart + 3)
            .map((_row) => _row.slice(boxColStart, boxColStart + 3))
            .reduce((prev, next) => [...prev, ...next], []);

        if (!test(boxItems, target)) return false;

        return true;
    };

    const getNextPos = (row: number, col: number): [number, number] =>
        col + 1 === 9 ? [row + 1, 0] : [row, col + 1];

    const candidates = "123456789";
    let done = false;

    const backtracking = (row: number, col: number): void => {
        if (row === 9) done = true; // test done
        if (done) return;
        if (board[row][col] !== ".") return backtracking(...getNextPos(row, col)); // go to fill the next empty pos

        for (const cand of candidates) {
            // trial and error
            board[row][col] = cand;
            if (isLegal(row, col)) {
                backtracking(...getNextPos(row, col));
            }
            if (done) return;
            board[row][col] = ".";
        }
    };

    backtracking(0, 0);
}
