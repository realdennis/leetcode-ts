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

function preorderTraversal(root: TreeNode | null): number[] {
	/**
    preorder(DLR) using morris, count the D(root) first, 
    and we have L and R, we raise the L as new root, and put the R to the L's right most,
    and if we don't have the left child, we go to right child
    
    eg. D L1 L2 L3 R
    
        D                L1                 L2                                     L3
       / \   --(D)-->   / \    ---(L1)-->     \     ----(L2) no left child --->     \
      L1   R           L2  L3                  L3                                    R
      /\                    \                   \
     L2 L3                   R                   R
      
    **/
	const ret: number[] = [];
	let cur = root;

	while (cur !== null) {
		ret.push(cur.val);
		const { left, right } = root;

		if (left === null) {
			cur = right;
			continue;
		}

		let rightmost = left;
		while (rightmost.right !== null) rightmost = rightmost.right;
		rightmost.right = right;
		cur = left;
	}

	return ret;
}
