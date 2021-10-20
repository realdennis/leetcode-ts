/**
    Let's iteration and check their adjacency node if they are both '1' 
        1. Iteration from [0,0] to [m,n]
        2. For [i,j], if it's '1' check the [i+1,j] [i,j+1]
            1. if yes, then union(find(i,j), find(i+1,j))
        3. Before access the arry, notice the corner case
        
    Let's define the union/find structure
        1. mxn table
        2. find(i,j) 
            1. if(table[i][j] is empty then table[i][j] = [i,j];
                1. generateId: just increase the unique key
            2. else return find(table[i][j])
        3. union(a,b)
            1. find(a) = find(b);
**/

function numIslands(grid: string[][]): number {
	const m = grid.length;
	const n = grid[0].length;

	const parent: number[][][] = Array.from({ length: m }, (val) =>
		Array.from({ length: n }, (val) => [-1, -1])
	);

	const find = (...u: number[]): number[] => {
		const [i, j] = u;
		const [pI, pJ] = parent[i][j];
		if (pI === -1 && pJ === -1) {
			parent[i][j] = [i, j];
			return [i, j];
		} else {
			return pI === i && pJ === j ? [i, j] : find(pI, pJ);
		}
	};
	const union = (u1: number[], u2: number[]): void => {
		console.log(u1, u2);
		const p1 = find(...u1);
		const [i, j] = find(...u2);
		parent[i][j] = p1;
	};

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === "0") continue;
			if (i + 1 !== m && j + 1 !== n && grid[i + 1][j + 1] === "1")
				union([i, j], [i + 1, j + 1]);
			if (i + 1 !== m && grid[i + 1][j] === "1") union([i, j], [i + 1, j]);
			if (j + 1 !== n && grid[i][j + 1] === "1") union([i, j], [i, j + 1]);
		}
	}
	const collections: Set<string> = new Set();
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			const p = parent[i][j];
			if (p[0] === -1 && p[1] === -1) continue;
			collections.add(`${p[0]}-${p[1]}`);
		}
	}
	return collections.size;
}
