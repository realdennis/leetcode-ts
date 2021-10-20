// class TreeNode {
// 	val: number;
// 	left: TreeNode | null;
// 	right: TreeNode | null;
// 	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
// 		this.val = val === undefined ? 0 : val;
// 		this.left = left === undefined ? null : left;
// 		this.right = right === undefined ? null : right;
// 	}
// }

/**
    DFS approach
    
    1. DFS find path p & path q
    2. The last common of the path p & path q is the LCA

**/

function lowestCommonAncestor(
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null
): TreeNode | null {
	const dfsPath = (targetNode: TreeNode): number[] => {
		const path: number[] = [];
		let ret: number[] = [];
		const dfs = (curr = root): void => {
			if (curr === null) return;
			if (curr === targetNode) {
				ret = path;
				return;
			}
			if (ret.length !== 0) return;
			path.push(curr.val);
			dfs(curr.left);
			dfs(curr.right);
			path.pop();
		};
		dfs();
		return ret;
	};
	const pathP = dfsPath(p);
	const pathQ = dfsPath(q);

	let lastCommonVal: number = root.val;
	while (pathP.length !== 0 && pathQ.length !== 0) {
		const pFirst = pathP.shift();
		const qFirst = pathQ.shift();
		if (pFirst !== qFirst) break;
		pFirst === qFirst && (lastCommonVal = pFirst);
	}

	// BFS find node
	const findByVal = (val): TreeNode => {
		const queue: TreeNode[] = [];
		queue.push(root);
		while (queue.length !== 0) {
			let len = queue.length;
			while (len-- !== 0) {
				const curr = queue.shift();
				if (curr.val === val) return curr;
				curr.left && queue.push(curr.left);
				curr.right && queue.push(curr.right);
			}
		}
	};
	return findByVal(lastCommonVal);
}
