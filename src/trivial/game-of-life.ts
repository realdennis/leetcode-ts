function gameOfLife(board: number[][]): void {
    /**
      1. State change rule
          dead cell 
              - 3 live neighbors become live
          
          live cell: 
              - < 2 neighbor dies
              - 2-3 neighbor live
              - >3 neighbor dies
      
      2. To implement the in-place approach, we rely other two state
          s1      s2
          die  -> die  : 00 -> 00
          die  -> live : 00 -> 10
          live -> live : 01 -> 11
          live -> die  : 01 -> 01
  
          using %2 to get s1
          using >>1 to get s2
    **/

    const M = board.length;
    const N = board[0].length;

    const getNeighbors = (i: number, j: number): number => {
        let ret = 0;
        for (let ptr1 = i - 1; ptr1 <= i + 1; ptr1++) {
            // check boundary
            if (ptr1 < 0 || ptr1 >= M) continue;
            for (let ptr2 = j - 1; ptr2 <= j + 1; ptr2++) {
                // check boundary
                if (ptr2 < 0 || ptr2 >= N) continue;

                // check non-self
                if (ptr1 === i && ptr2 === j) continue;

                if (board[ptr1][ptr2] % 2 === 1) ret++; // using %2 to check the s1
            }
        }
        return ret;
    };

    const transform = (prevState: number, neighbors: number): number => {
        if (prevState === 0) {
            if (neighbors === 3) return 2;
            // 00->10
            else return 0; // 00->00
        } else {
            if (neighbors < 2 || neighbors > 3) return 1;
            // 01 -> 01
            else return 3; // 01->11
        }
    };

    // transform
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            board[i][j] = transform(board[i][j], getNeighbors(i, j));
        }
    }

    // recover for next iteration
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            board[i][j] >>= 1;
        }
    }
}
