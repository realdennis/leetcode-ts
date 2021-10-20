/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthSmallest(root: TreeNode | null, k: number): number {
	/**
    In BST, if we want to get the sorted (increasing) item, 
    the first idea is inorder, that LDR could always from small to big,
    
    For Inorder, if we wanna improve the space size (no call stack / stack),
    the idea is morris traversal, and we don't need to contruct back the original structure.
    **/

	// morris traversal, raise the `L` subtree up, and prune the root.right,
	// then concat `DR` to the rightmost of `L` tree.

	let cur = root;
	while (cur !== null) {
		if (cur.left !== null) {
			const left = cur.left;
			cur.left = null;
			let rightmost = left;
			while (rightmost.right !== null) rightmost = rightmost.right;
			rightmost.right = cur;

			cur = left;
		} else {
			// do something
			if (--k !== 0) cur = cur.right;
			else break;
		}
	}
	return cur.val;
}
